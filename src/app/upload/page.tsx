'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Panel } from '@/components/ui';
import { Card } from '@/components/ui';
import { FileUploader, type FileWithStatus } from '@/components/upload/FileUploader';
import {
  DocumentIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';

const acceptedTypes = {
  'application/pdf': ['.pdf'],
  'image/jpeg': ['.jpg', '.jpeg'],
  'image/png': ['.png'],
};

export default function Upload() {
  const [files, setFiles] = useState<FileWithStatus[]>([]);

  const handleFileSelect = (newFiles: FileWithStatus[]) => {
    setFiles((prev) => [...prev, ...newFiles]);

    // Simulate upload progress for each file
    newFiles.forEach((fileData) => {
      if (fileData.status === 'error') return;

      const interval = setInterval(() => {
        setFiles((prev) =>
          prev.map((f) =>
            f.id === fileData.id
              ? {
                  ...f,
                  progress: Math.min(f.progress + 10, 100),
                  status: f.progress + 10 >= 100 ? 'success' : 'uploading',
                }
              : f
          )
        );
      }, 500);

      setTimeout(() => clearInterval(interval), 5000);
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid gap-6"
      >
        <Panel>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <h1 className="text-4xl font-bold mb-2 text-gradient">
              Upload Center
            </h1>
            <p className="text-gray-400 mb-8">
              Upload your documents securely. We accept PDF files for credit
              reports and utility bills, and JPG/PNG for ID verification.
            </p>

            <div className="bg-military-800/50 rounded-lg">
              <FileUploader
                onFileSelect={handleFileSelect}
                acceptedFileTypes={acceptedTypes}
                maxSize={10 * 1024 * 1024} // 10MB
                maxFiles={5}
              />
            </div>
          </motion.div>

          <AnimatePresence>
            {files.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-8 space-y-4"
              >
                <h2 className="text-2xl font-bold mb-4 text-gradient">
                  Uploaded Files
                </h2>
                {files.map((fileData) => (
                  <motion.div
                    key={fileData.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                  >
                    <Card
                      status={
                        fileData.status === 'success'
                          ? 'success'
                          : fileData.status === 'error'
                          ? 'error'
                          : 'warning'
                      }
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-2 rounded-lg bg-military-700/50">
                          <DocumentIcon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <p className="font-medium">{fileData.file.name}</p>
                            {fileData.status === 'success' ? (
                              <CheckCircleIcon className="w-5 h-5 text-alert-green" />
                            ) : fileData.status === 'error' ? (
                              <ExclamationCircleIcon className="w-5 h-5 text-alert-red" />
                            ) : null}
                          </div>
                          <div className="flex items-center gap-2">
                            <p className="text-sm text-gray-400">
                              {(fileData.file.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                            {fileData.errorMessage && (
                              <p className="text-sm text-alert-red">
                                {fileData.errorMessage}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-24 bg-military-600/50 rounded-full h-2 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${fileData.progress}%` }}
                              className={`h-2 rounded-full transition-colors ${
                                fileData.status === 'success'
                                  ? 'bg-alert-green'
                                  : fileData.status === 'error'
                                  ? 'bg-alert-red'
                                  : 'bg-alert-amber'
                              }`}
                            />
                          </div>
                          <span className="text-sm font-mono w-12 text-right">
                            {fileData.status === 'success'
                              ? '✓'
                              : fileData.status === 'error'
                              ? '✗'
                              : `${fileData.progress}%`}
                          </span>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </Panel>
      </motion.div>
    </div>
  );
} 