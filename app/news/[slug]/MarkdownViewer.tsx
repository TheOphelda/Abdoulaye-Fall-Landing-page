"use client";
import React from "react";
import ReactMarkdown from "react-markdown";

export default function MarkdownViewer({ content }: { content: string }) {
  return (
    <div className="prose md:prose-lg max-w-none text-gray-800">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
