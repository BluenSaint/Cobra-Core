'use client';

import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

interface FileUploadProps {
  onFileSelect: (files: File[]) => void;
  accept?: Record<string, string[]>;
  maxSize?: number;
  className?: string;
}

export function FileUpload({
  onFileSelect,
  accept,
  maxSize = 5 * 1024 * 1024, // 5MB default
  className,
}: FileUploadProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    onFileSelect(acceptedFiles);
  }, [onFileSelect]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
    maxSize,
  });

  return (
    <div
      {...getRootProps()}
      className={cn(
        'border-2 border-dashed border-military-600 rounded-lg p-8 text-center cursor-pointer transition-colors',
        isDragActive && 'border-alert-green bg-military-700/50',
        className
      )}
    >
      <input {...getInputProps()} />
      <div className="space-y-4">
        <div className="text-4xl mb-4">📄</div>
        {isDragActive ? (
          <p className="text-alert-green">Drop the files here</p>
        ) : (
          <>
            <p className="text-gray-400">Drag and drop files here, or</p>
            <Button variant="outline" type="button">
              Select Files
            </Button>
          </>
        )}
      </div>
    </div>
  );
} 