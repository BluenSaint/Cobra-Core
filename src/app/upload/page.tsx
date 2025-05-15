'use client';

import React, { useState } from 'react';
import { Panel } from '@/components/ui/Panel';
import { Card } from '@/components/ui/Card';
import { FileUpload } from '@/components/upload/FileUpload';

interface UploadedFile {
  file: File;
  status: 'uploading' | 'success' | 'error';
  progress: number;
}

export default function Upload() {
  const [files, setFiles] = useState<UploadedFile[]>([]);

  const handleFileSelect = (selectedFiles: File[]) => {
    const newFiles = selectedFiles.map((file) => ({
      file,
      status: 'uploading' as const,
      progress: 0,
    }));
    setFiles((prev) => [...prev, ...newFiles]);

    // Simulate upload progress
    newFiles.forEach((fileData) => {
      const interval = setInterval(() => {
        setFiles((prev) =>
          prev.map((f) =>
            f.file === fileData.file
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
    <main className="container mx-auto px-4 py-8">
      <div className="grid gap-6">
        <Panel>
          <h1 className="text-4xl font-bold mb-6">Upload Center</h1>
          <p className="text-gray-400 mb-8">
            Upload your documents securely. We accept PDF files for credit reports and utility bills,
            and JPG/PNG for ID verification.
          </p>

          <FileUpload
            onFileSelect={handleFileSelect}
            accept={{
              'application/pdf': ['.pdf'],
              'image/jpeg': ['.jpg', '.jpeg'],
              'image/png': ['.png'],
            }}
            maxSize={10 * 1024 * 1024} // 10MB
          />

          {files.length > 0 && (
            <div className="mt-8 space-y-4">
              <h2 className="text-2xl font-bold mb-4">Uploaded Files</h2>
              {files.map((fileData, index) => (
                <Card
                  key={`${fileData.file.name}-${index}`}
                  status={fileData.status === 'success' ? 'success' : 'default'}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{fileData.file.name}</p>
                      <p className="text-sm text-gray-400">
                        {(fileData.file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-24 bg-military-600 rounded-full h-2">
                        <div
                          className="bg-alert-green h-2 rounded-full transition-all duration-300"
                          style={{ width: `${fileData.progress}%` }}
                        />
                      </div>
                      <span className="text-sm">
                        {fileData.status === 'success' ? '✓' : `${fileData.progress}%`}
                      </span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </Panel>
      </div>
    </main>
  );
} 