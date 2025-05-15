import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { motion, AnimatePresence } from 'framer-motion';
import { DocumentIcon, XMarkIcon } from '@heroicons/react/24/outline';

export interface FileWithStatus {
  file: File;
  id: string;
  status: 'pending' | 'uploading' | 'success' | 'error';
  progress: number;
  errorMessage?: string;
}

interface FileUploaderProps {
  onFileSelect: (files: FileWithStatus[]) => void;
  acceptedFileTypes?: {
    'application/pdf': string[];
    'image/jpeg': string[];
    'image/png': string[];
  };
  maxSize?: number;
  maxFiles?: number;
}

const defaultAcceptedTypes = {
  'application/pdf': ['.pdf'],
  'image/jpeg': ['.jpg', '.jpeg'],
  'image/png': ['.png'],
};

export function FileUploader({
  onFileSelect,
  acceptedFileTypes = defaultAcceptedTypes,
  maxSize = 10 * 1024 * 1024, // 10MB
  maxFiles = 5,
}: FileUploaderProps) {
  const [isDragActive, setIsDragActive] = useState(false);

  const onDrop = useCallback(
    (acceptedFiles: File[], rejectedFiles: any[]) => {
      const newFiles: FileWithStatus[] = acceptedFiles.map((file) => ({
        file,
        id: Math.random().toString(36).substring(7),
        status: 'pending',
        progress: 0,
      }));

      if (rejectedFiles.length > 0) {
        const rejectedWithStatus: FileWithStatus[] = rejectedFiles.map(
          ({ file, errors }) => ({
            file,
            id: Math.random().toString(36).substring(7),
            status: 'error',
            progress: 0,
            errorMessage: errors[0].message,
          })
        );
        onFileSelect([...newFiles, ...rejectedWithStatus]);
      } else {
        onFileSelect(newFiles);
      }
    },
    [onFileSelect]
  );

  const { getRootProps, getInputProps, isDragReject } = useDropzone({
    onDrop,
    accept: acceptedFileTypes,
    maxSize,
    maxFiles,
    onDragEnter: () => setIsDragActive(true),
    onDragLeave: () => setIsDragActive(false),
  });

  return (
    <div
      {...getRootProps()}
      className={`relative rounded-lg border-2 border-dashed p-8 transition-colors ${
        isDragActive
          ? 'border-accent-primary bg-military-800/50'
          : isDragReject
          ? 'border-alert-red bg-military-800/50'
          : 'border-military-600 hover:border-military-500'
      }`}
    >
      <input {...getInputProps()} />
      <motion.div
        initial={false}
        animate={{
          scale: isDragActive ? 1.02 : 1,
        }}
        className="flex flex-col items-center justify-center gap-4 text-center"
      >
        <div
          className={`rounded-full p-4 ${
            isDragActive
              ? 'bg-accent-primary/20 text-accent-primary'
              : 'bg-military-700/50'
          }`}
        >
          <DocumentIcon className="h-8 w-8" />
        </div>

        <div className="space-y-2">
          <p className="text-lg font-medium">
            {isDragActive
              ? 'Drop files here'
              : isDragReject
              ? 'Some files will be rejected'
              : 'Drag and drop files here'}
          </p>
          <p className="text-sm text-gray-400">
            Supports PDF, JPG, and PNG files up to 10MB
          </p>
        </div>

        <button
          type="button"
          className="btn btn-secondary"
          onClick={(e) => e.stopPropagation()}
        >
          Browse Files
        </button>
      </motion.div>
    </div>
  );
} 