// src/pages/whitepaper.tsx
import { useState, useEffect } from 'react'
import Layout from '../components/Layout/Layout'
import ReactMarkdown from 'react-markdown'
import fs from 'fs'
import path from 'path'

// 添加类型定义
interface WhitePaperProps {
  content: string
}

// 在构建时获取 markdown 内容
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'docs', 'FAIWWP202412111657_EN.md')
  const content = fs.readFileSync(filePath, 'utf8')
  
  return {
    props: {
      content
    }
  }
}

const WhitePaper = ({ content }: WhitePaperProps) => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <article className="prose prose-blue max-w-none">
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>
      </div>
    </Layout>
  )
}

export default WhitePaper