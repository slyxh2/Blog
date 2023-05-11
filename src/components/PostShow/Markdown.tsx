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
        children={post}
        components={{
            h1: ({ node, ...props }) => {
                console.log(node, props);
                return <h1 style={{ color: 'red' }} {...props} />;
            },
            code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                    <SyntaxHighlighter
                        {...props}
                        children={String(children).replace(/\n$/, '')}
                        style={solarizedlight}
                        language={match[1]}
                        PreTag="div"
                    />
                ) : (
                    <code {...props} className={className}>
                        {children}
                    </code>
                )
            }
        }}
    />
}


export default Markdown;