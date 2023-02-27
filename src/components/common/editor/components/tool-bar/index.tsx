import { Icon } from '@/components/common/icon'
import * as Styles from './styles'
import { ToolBarProps } from './types'

export function ToolBar (props: ToolBarProps) {
  const { editor } = props

  if (!editor) return null

  return (
    <Styles.Container>
      <nav>
        <Styles.List>
          <li>
            <Styles.Button
              onClick={() => editor?.chain().focus().toggleBold().run()}
              type="button"
              active={editor?.isActive('bold')}
              disabled={!editor?.can().chain().focus().toggleBold().run()}
            >
              <Icon name="bold" size={18} />
            </Styles.Button>
          </li>
          <li>
            <Styles.Button 
              onClick={() => editor?.chain().focus().toggleItalic().run()}
              type="button"
              active={editor?.isActive('italic')}
              disabled={!editor?.can().chain().focus().toggleItalic().run()}
            >
              <Icon name="italic" size={18} />
            </Styles.Button>
          </li>
          <li>
            <Styles.Button
              onClick={() => editor?.chain().focus().toggleStrike().run()}
              disabled={!editor?.can().chain().toggleStrike().run()}
              active={editor?.isActive('strike')}
              type="button"
            >
              <Icon name="lineThrough" size={18} />
            </Styles.Button>
          </li>
          <li>
            <Styles.Button
              onClick={() => editor?.chain().focus().toggleBulletList().run()}
              active={editor?.isActive('bulletList')}
              type="button"
            >
              <Icon name="listUl" size={18} />
            </Styles.Button>
          </li>
          <li>
            <Styles.Button
              onClick={() => editor?.chain().focus().toggleOrderedList().run()}
              active={editor?.isActive('orderedList')}
              type="button"
            >
              <Icon name="listOl" size={18} />
            </Styles.Button>
          </li>
        </Styles.List>
      </nav>
    </Styles.Container>
  )
}