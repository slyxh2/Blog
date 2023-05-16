import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { solarizedlight } from 'react-syntax-highlighter/dist/cjs/styles/prism'
type MarkdownProps = {
    post: string
}

const Markdown: React.FC<MarkdownProps> = ({ post }) => {
    return <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
            img: ({ node, ...props }) => {
                return <img style={{ maxWidth: '800px', width: '100%' }} {...props} />;
            },
            code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                    <SyntaxHighlighter
                        {...props}
                        style={solarizedlight}
                        language={match[1]}
                        PreTag="div"
                    >
                        {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                ) : (
                    <code {...props} className={className}>
                        {children}
                    </code>
                )
            }
        }}
    >
        {post}
    </ReactMarkdown>
}


export default Markdown;