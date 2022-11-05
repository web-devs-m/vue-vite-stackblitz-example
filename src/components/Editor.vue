<template>
  <div v-if="editor">
    <button @click="addVideo">Add Video</button>
    <button @click="addImage">setImage</button>
    <input
      type="color"
      @input="editor.chain().focus().setColor(($event as any).target?.value).run()"
      :value="editor.getAttributes('textStyle').color"
    />
    <button
      @click="editor.chain().focus().setColor('#958DF1').run()"
      :class="{
        'is-active': editor.isActive('textStyle', { color: '#958DF1' }),
      }"
    >
      purple
    </button>
    <button
      @click="editor.chain().focus().setColor('#F98181').run()"
      :class="{
        'is-active': editor.isActive('textStyle', { color: '#F98181' }),
      }"
    >
      red
    </button>
    <button
      @click="editor.chain().focus().setColor('#FBBC88').run()"
      :class="{
        'is-active': editor.isActive('textStyle', { color: '#FBBC88' }),
      }"
    >
      orange
    </button>
    <button
      @click="editor.chain().focus().setColor('#FAF594').run()"
      :class="{
        'is-active': editor.isActive('textStyle', { color: '#FAF594' }),
      }"
    >
      yellow
    </button>
    <button
      @click="editor.chain().focus().setColor('#70CFF8').run()"
      :class="{
        'is-active': editor.isActive('textStyle', { color: '#70CFF8' }),
      }"
    >
      blue
    </button>
    <button
      @click="editor.chain().focus().setColor('#94FADB').run()"
      :class="{
        'is-active': editor.isActive('textStyle', { color: '#94FADB' }),
      }"
    >
      teal
    </button>
    <button
      @click="editor.chain().focus().setColor('#B9F18D').run()"
      :class="{
        'is-active': editor.isActive('textStyle', { color: '#B9F18D' }),
      }"
    >
      green
    </button>
    <button @click="editor.chain().focus().unsetColor().run()">
      unsetColor
    </button>
    <button
      @click="editor.chain().focus().toggleBlockquote().run()"
      :class="{ 'is-active': editor.isActive('blockquote') }"
    >
      toggleBlockquote
    </button>
    <button
      @click="editor.chain().focus().setBlockquote().run()"
      :disabled="!editor.can().setBlockquote()"
    >
      setBlockquote
    </button>
    <button
      @click="editor.chain().focus().unsetBlockquote().run()"
      :disabled="!editor.can().unsetBlockquote()"
    >
      unsetBlockquote
    </button>
    <button
      @click="editor.chain().focus().toggleUnderline().run()"
      :class="{ 'is-active': editor.isActive('underline') }"
    >
      toggleUnderline
    </button>
    <button
      @click="editor.chain().focus().setUnderline().run()"
      :disabled="editor.isActive('underline')"
    >
      setUnderline
    </button>
    <button
      @click="editor.chain().focus().unsetUnderline().run()"
      :disabled="!editor.isActive('underline')"
    >
      unsetUnderline
    </button>
    <button
      @click="editor.chain().focus().setTextAlign('left').run()"
      :class="{ 'is-active': editor.isActive({ textAlign: 'left' }) }"
    >
      left
    </button>
    <button
      @click="editor.chain().focus().setTextAlign('center').run()"
      :class="{ 'is-active': editor.isActive({ textAlign: 'center' }) }"
    >
      center
    </button>
    <button
      @click="editor.chain().focus().setTextAlign('right').run()"
      :class="{ 'is-active': editor.isActive({ textAlign: 'right' }) }"
    >
      right
    </button>
    <button
      @click="editor.chain().focus().setTextAlign('justify').run()"
      :class="{ 'is-active': editor.isActive({ textAlign: 'justify' }) }"
    >
      justify
    </button>
    <button @click="editor.chain().focus().unsetTextAlign().run()">
      unsetTextAlign
    </button>
    <button
      @click="editor.chain().focus().toggleSubscript().run()"
      :class="{ 'is-active': editor.isActive('subscript') }"
    >
      toggleSubscript
    </button>
    <button
      @click="editor.chain().focus().setSubscript().run()"
      :disabled="editor.isActive('subscript')"
    >
      setSubscript
    </button>
    <button
      @click="editor.chain().focus().unsetSubscript().run()"
      :disabled="!editor.isActive('subscript')"
    >
      unsetSubscript
    </button>
    <button
      @click="editor.chain().focus().toggleSuperscript().run()"
      :class="{ 'is-active': editor.isActive('superscript') }"
    >
      toggleSuperscript
    </button>
    <button
      @click="editor.chain().focus().setSuperscript().run()"
      :disabled="editor.isActive('superscript')"
    >
      setSuperscript
    </button>
    <button
      @click="editor.chain().focus().unsetSuperscript().run()"
      :disabled="!editor.isActive('superscript')"
    >
      unsetSuperscript
    </button>
    <button
      @click="editor.chain().focus().toggleBulletList().run()"
      :class="{ 'is-active': editor.isActive('bulletList') }"
    >
      toggleBulletList
    </button>
    <button
      @click="editor.chain().focus().toggleOrderedList().run()"
      :class="{ 'is-active': editor.isActive('orderedList') }"
    >
      toggleOrderedList
    </button>
    <button
      @click="editor.chain().focus().splitListItem('listItem').run()"
      :disabled="!editor.can().splitListItem('listItem')"
    >
      splitListItem
    </button>
    <button
      @click="editor.chain().focus().sinkListItem('listItem').run()"
      :disabled="!editor.can().sinkListItem('listItem')"
    >
      sinkListItem
    </button>
    <button
      @click="editor.chain().focus().liftListItem('listItem').run()"
      :disabled="!editor.can().liftListItem('listItem')"
    >
      liftListItem
    </button>
    <button @click="setLink" :class="{ 'is-active': editor.isActive('link') }">
      setLink
    </button>
    <button
      @click="editor.chain().focus().unsetLink().run()"
      :disabled="!editor.isActive('link')"
    >
      unsetLink
    </button>
    <button
      @click="editor.chain().focus().undo().run()"
      :disabled="!editor.can().undo()"
    >
      undo
    </button>
    <button
      @click="editor.chain().focus().redo().run()"
      :disabled="!editor.can().redo()"
    >
      redo
    </button>
    <button
      @click="editor.chain().focus().toggleCode().run()"
      :class="{ 'is-active': editor.isActive('code') }"
    >
      toggleCode
    </button>
    <button
      @click="editor.chain().focus().setCode().run()"
      :disabled="editor.isActive('code')"
    >
      setCode
    </button>
    <button
      @click="editor.chain().focus().unsetCode().run()"
      :disabled="!editor.isActive('code')"
    >
      unsetCode
    </button>

    <button
      @click="editor.chain().focus().toggleCodeBlock().run()"
      :class="{ 'is-active': editor.isActive('codeBlock') }"
    >
      toggleCodeBlock
    </button>
    <button
      @click="editor.chain().focus().setCodeBlock().run()"
      :disabled="editor.isActive('codeBlock')"
    >
      setCodeBlock
    </button>
    <button
      @click="editor.chain().focus().toggleHighlight().run()"
      :class="{ 'is-active': editor.isActive('highlight') }"
    >
      toggleHighlight
    </button>
    <button
      @click="
        editor.chain().focus().toggleHighlight({ color: '#ffc078' }).run()
      "
      :class="{
        'is-active': editor.isActive('highlight', { color: '#ffc078' }),
      }"
    >
      orange
    </button>
    <button
      @click="
        editor.chain().focus().toggleHighlight({ color: '#8ce99a' }).run()
      "
      :class="{
        'is-active': editor.isActive('highlight', { color: '#8ce99a' }),
      }"
    >
      green
    </button>
    <button
      @click="
        editor.chain().focus().toggleHighlight({ color: '#74c0fc' }).run()
      "
      :class="{
        'is-active': editor.isActive('highlight', { color: '#74c0fc' }),
      }"
    >
      blue
    </button>
    <button
      @click="
        editor.chain().focus().toggleHighlight({ color: '#b197fc' }).run()
      "
      :class="{
        'is-active': editor.isActive('highlight', { color: '#b197fc' }),
      }"
    >
      purple
    </button>
    <button
      @click="editor.chain().focus().toggleHighlight({ color: 'red' }).run()"
      :class="{ 'is-active': editor.isActive('highlight', { color: 'red' }) }"
    >
      red ('red')
    </button>
    <button
      @click="
        editor.chain().focus().toggleHighlight({ color: '#ffa8a8' }).run()
      "
      :class="{
        'is-active': editor.isActive('highlight', { color: '#ffa8a8' }),
      }"
    >
      red (#ffa8a8)
    </button>
    <button
      @click="editor.chain().focus().unsetHighlight().run()"
      :disabled="!editor.isActive('highlight')"
    >
      unsetHighlight
    </button>
    <button
      @click="
        editor
          .chain()
          .focus()
          .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
          .run()
      "
    >
      insertTable
    </button>
    <button @click="editor.chain().focus().addColumnBefore().run()">
      addColumnBefore
    </button>
    <button @click="editor.chain().focus().addColumnAfter().run()">
      addColumnAfter
    </button>
    <button @click="editor.chain().focus().deleteColumn().run()">
      deleteColumn
    </button>
    <button @click="editor.chain().focus().addRowBefore().run()">
      addRowBefore
    </button>
    <button @click="editor.chain().focus().addRowAfter().run()">
      addRowAfter
    </button>
    <button @click="editor.chain().focus().deleteRow().run()">deleteRow</button>
    <button @click="editor.chain().focus().deleteTable().run()">
      deleteTable
    </button>
    <button @click="editor.chain().focus().mergeCells().run()">
      mergeCells
    </button>
    <button @click="editor.chain().focus().splitCell().run()">splitCell</button>
    <button @click="editor.chain().focus().toggleHeaderColumn().run()">
      toggleHeaderColumn
    </button>
    <button @click="editor.chain().focus().toggleHeaderRow().run()">
      toggleHeaderRow
    </button>
    <button @click="editor.chain().focus().toggleHeaderCell().run()">
      toggleHeaderCell
    </button>
    <button @click="editor.chain().focus().mergeOrSplit().run()">
      mergeOrSplit
    </button>
    <button
      @click="editor.chain().focus().setCellAttribute('colspan', 2).run()"
    >
      setCellAttribute
    </button>
    <button @click="editor.chain().focus().fixTables().run()">fixTables</button>
    <button @click="editor.chain().focus().goToNextCell().run()">
      goToNextCell
    </button>
    <button @click="editor.chain().focus().goToPreviousCell().run()">
      goToPreviousCell
    </button>
    <button
      @click="editor.chain().focus().toggleTaskList().run()"
      :class="{ 'is-active': editor.isActive('taskList') }"
    >
      toggleTaskList
    </button>
    <button
      @click="editor.chain().focus().splitListItem('taskItem').run()"
      :disabled="!editor.can().splitListItem('taskItem')"
    >
      splitListItem
    </button>
    <button
      @click="editor.chain().focus().sinkListItem('taskItem').run()"
      :disabled="!editor.can().sinkListItem('taskItem')"
    >
      sinkListItem
    </button>
    <button
      @click="editor.chain().focus().liftListItem('taskItem').run()"
      :disabled="!editor.can().liftListItem('taskItem')"
    >
      liftListItem
    </button>
  </div>
  <div v-if="editor" style="position: relative">
    <bubble-menu
      class="bubble-menu"
      :tippy-options="{ duration: 100 }"
      :editor="editor"
    >
      <button
        @click="editor.chain().focus().toggleBold().run()"
        :class="{ 'is-active': editor.isActive('bold') }"
      >
        Bold
      </button>
      <button
        @click="editor.chain().focus().toggleItalic().run()"
        :class="{ 'is-active': editor.isActive('italic') }"
      >
        Italic
      </button>
      <button
        @click="editor.chain().focus().toggleStrike().run()"
        :class="{ 'is-active': editor.isActive('strike') }"
      >
        Strike
      </button>
    </bubble-menu>

    <floating-menu
      class="floating-menu"
      :tippy-options="{ duration: 100 }"
      :editor="editor"
    >
      <button
        @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
      >
        H1
      </button>
      <button
        @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
      >
        H2
      </button>
      <button
        @click="editor.chain().focus().toggleBulletList().run()"
        :class="{ 'is-active': editor.isActive('bulletList') }"
      >
        Bullet List
      </button>
    </floating-menu>
    <editor-content :editor="editor" />
  </div>
  <div class="character-count" v-if="editor">
    {{ editor.storage.characterCount.characters() }}/{{ limit }} characters
    <br />
    {{ editor.storage.characterCount.words() }} words
  </div>
</template>

<script lang="ts">
import {
  BubbleMenu,
  Editor,
  EditorContent,
  FloatingMenu,
  VueNodeViewRenderer,
} from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import CharacterCount from '@tiptap/extension-character-count';
// import Document from '@tiptap/extension-document';
// import Paragraph from '@tiptap/extension-paragraph';
// import Text from '@tiptap/extension-text';
import Youtube from '@tiptap/extension-youtube';
import Highlight from '@tiptap/extension-highlight';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import Mention from '@tiptap/extension-mention';
import Placeholder from '@tiptap/extension-placeholder';
import Superscript from '@tiptap/extension-superscript';
import Subscript from '@tiptap/extension-subscript';
// import Blockquote from '@tiptap/extension-blockquote';
import Table from '@tiptap/extension-table'; // its borken for some reason
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import TableRow from '@tiptap/extension-table-row';
import TaskItem from '@tiptap/extension-task-item';
import TaskList from '@tiptap/extension-task-list';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import Typography from '@tiptap/extension-typography';
import TextStyle from '@tiptap/extension-text-style';
import { Color } from '@tiptap/extension-color';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import css from 'highlight.js/lib/languages/css';
import js from 'highlight.js/lib/languages/javascript';
import ts from 'highlight.js/lib/languages/typescript';
import html from 'highlight.js/lib/languages/xml';
// load all highlight.js languages
import { lowlight } from 'lowlight';

import suggestion from './suggestion';
import CodeBlockComponent from './CodeBlockComponent.vue';

lowlight.registerLanguage('html', html);
lowlight.registerLanguage('css', css);
lowlight.registerLanguage('js', js);
lowlight.registerLanguage('javascript', js);
lowlight.registerLanguage('ts', ts);
lowlight.registerLanguage('typescript', ts);

export default {
  components: {
    EditorContent,
    BubbleMenu,
    FloatingMenu,
  },

  data(): { editor: any; limit: number } {
    return {
      editor: null,
      limit: 10000,
    };
  },

  mounted() {
    this.editor = new Editor({
      // content2: '',
      // content: '<p>I’m running Tiptap with Vue.js. 🎉</p>',
      content: `
      <p>
          Let‘s make sure people can’t write more than 280 characters. I bet you could build one of the biggest social networks on that idea. 🎉
        </p>

        <p>
          That’s a boring paragraph followed by a fenced code block:
        </p>
        <pre><code class="language-javascript">for (var i=1; i <= 20; i++)
{
  if (i % 15 == 0)
    console.log("FizzBuzz");
  else if (i % 3 == 0)
    console.log("Fizz");
  else if (i % 5 == 0)
    console.log("Buzz");
  else
    console.log(i);
}</code></pre>
        <p>
          Press Command/Ctrl + Enter to leave the fenced code block and continue typing in boring paragraphs.
        </p>
        <p>This isn’t highlighted.</s></p>
        <p><mark>But that one is.</mark></p>
        <p><mark style="background-color: red;">And this is highlighted too, but in a different color.</mark></p>
        <p><mark data-color="#ffa8a8">And this one has a data attribute.</mark></p>

        <img src="https://source.unsplash.com/K9QHL52rE2k/100x100" />

        <p>
          Wow, this editor has support for links to the whole <a href="https://en.wikipedia.org/wiki/World_Wide_Web">world wide web</a>. We tested a lot of URLs and I think you can add *every URL* you want. Isn’t that cool? Let’s try <a href="https://statamic.com/">another one!</a> Yep, seems to work.
        </p>

        <h1>Mentions</h1>
        <p>Hi everyone! Don’t forget the daily stand up at 8 AM.</p>
        <p><span data-type="mention" data-id="Jennifer Grey"></span> Would you mind to share what you’ve been working on lately? We fear not much happened since Dirty Dancing.
        <p><span data-type="mention" data-id="Winona Ryder"></span> <span data-type="mention" data-id="Axl Rose"></span> Let’s go through your most important points quickly.</p>
        <p>I have a meeting with <span data-type="mention" data-id="Christina Applegate"></span> and don’t want to come late.</p>
        <p>– Thanks, your big boss</p>

        <h1>Superscript & subscript</h1>
        <p>This is regular text.</p>
        <p><sup>This is superscript.</sup></p>
        <p><span style="vertical-align: super">And this.</span></p>

        <p><sub>This is subscript.</sub></p>
        <p><span style="vertical-align: sub">And this.</span></p>

        <h1>Task List</h1>
        <ul data-type="taskList">
          <li data-type="taskItem" data-checked="true">A list item</li>
          <li data-type="taskItem" data-checked="false">And another one</li>
        </ul>


        <h1>Text Alignment</h1>
        <p>first paragraph</p>
        <p style="text-align: center">second paragraph</p>
        <p style="text-align: right">third paragraph</p>

        <hr>
        <br>
        <h1>Underlines</h1>
        <p>There is no underline here.</p>
        <p><u>This is underlined though.</u></p>
        <p style="text-decoration: underline">And this as well.</p>

        <h1>Typography</h1>
        <p>“I have been suffering from Typomania all my life, a sickness that is incurable but not lethal.”</p>
        <p>— Erik Spiekermann, December 2008</p>

        <h1>Blockquote</h1>
        <blockquote>
            Nothing is impossible, the word itself says “I’m possible!”
          </blockquote>

        <h1>TextStyle & Color</h1>
        <p><span style="color: #958DF1">Oh, for some reason that’s purple.</span></p>

        <hr>
        <p>
          Markdown shortcuts make it easy to format the text while typing.
        </p>
        <p>
          To test that, start a new line and type <code>#</code> followed by a space to get a heading. Try <code>#</code>, <code>##</code>, <code>###</code>, <code>####</code>, <code>#####</code>, <code>######</code> for different levels.
        </p>
        <p>
          Those conventions are called input rules in tiptap. Some of them are enabled by default. Try <code>></code> for blockquotes, <code>*</code>, <code>-</code> or <code>+</code> for bullet lists, or <code>\`foobar\`</code> to highlight code, <code>~~tildes~~</code> to strike text, or <code>==equal signs==</code> to highlight text.
        </p>
        <p>
          You can overwrite existing input rules or add your own to nodes, marks and extensions.
        </p>
        <p>
          For example, we added the <code>Typography</code> extension here. Try typing <code>(c)</code> to see how it’s converted to a proper © character. You can also try <code>-></code>, <code>>></code>, <code>1/2</code>, <code>!=</code>, or <code>--</code>.
        </p>

        <h1>Tables</h1>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th colspan="3">Description</th>
            </tr>
            <tr>
              <td>Cyndi Lauper</td>
              <td>singer</td>
              <td>songwriter</td>
              <td>actress</td>
            </tr>
          </tbody>
        </table>

        <h1>Youtube Video</h1>
        <div data-youtube-video>
          <iframe src="https://www.youtube.com/watch?v=cqHqLQgVCgY"></iframe>
        </div>
        <p>Try adding your own video to this editor!</p>

      `,
      extensions: [
        StarterKit.configure({
          // Disable an included extension
          codeBlock: false,
        }),
        Typography,
        TextStyle,
        Color,
        Image,
        Superscript,
        Subscript,
        Underline,
        CharacterCount.configure({ limit: this.limit }),
        Highlight.configure({ multicolor: true }),
        Youtube.configure({
          nocookie: true,
          controls: true,
          allowFullscreen: true,
          autoplay: false,
        }),
        CodeBlockLowlight.extend({
          addNodeView() {
            return VueNodeViewRenderer(CodeBlockComponent);
          },
        }).configure({ lowlight }),
        Link.configure({
          openOnClick: false,
        }),
        Mention.configure({
          HTMLAttributes: {
            class: 'mention',
          },
          suggestion,
        }),
        Placeholder.configure({
          // Use a placeholder:
          placeholder: 'Write something …',
          // Use different placeholders depending on the node type:
          // placeholder: ({ node }) => {
          //   if (node.type.name === 'heading') {
          //     return 'What’s the title?'
          //   }

          //   return 'Can you add some further context?'
          // },
        }),
        // --- Table extensions ----
        Table.configure({
          resizable: true,
        }),
        TableRow,
        TableHeader,
        TableCell,
        TaskList,
        TaskItem.configure({
          nested: true,
        }),
        TextAlign.configure({
          types: ['heading', 'paragraph'],
        }),
      ],
    });
  },

  beforeUnmount() {
    this.editor.destroy();
  },

  methods: {
    addVideo() {
      const url = prompt(
        'Enter YouTube URL',
        'https://www.youtube.com/watch?v=b61rtYhuyag'
      );
      this.editor.commands.setYoutubeVideo({
        src: url,
        width: 640,
        height: 480,
      });
    },
    addImage() {},
    setLink() {
      const previousUrl = this.editor.getAttributes('link').href;
      const url = window.prompt('URL', previousUrl);

      // cancelled
      if (url === null) {
        return;
      }

      // empty
      if (url === '') {
        this.editor.chain().focus().extendMarkRange('link').unsetLink().run();

        return;
      }

      // update link
      this.editor
        .chain()
        .focus()
        .extendMarkRange('link')
        .setLink({ href: url })
        .run();
    },
  },
};
</script>

<style lang="scss">
/* Placeholder (at the top) */
.ProseMirror p.is-editor-empty:first-child::before {
  content: attr(data-placeholder);
  float: left;
  color: #adb5bd;
  pointer-events: none;
  height: 0;
}

/* Placeholder (on every new line) */
/*.ProseMirror p.is-empty::before {
  content: attr(data-placeholder);
  float: left;
  color: #adb5bd;
  pointer-events: none;
  height: 0;
}*/

/* Basic editor styles */
.ProseMirror {
  > * + * {
    margin-top: 0.75em;
  }

  ul,
  ol {
    padding: 0 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1;
  }

  code {
    background-color: rgba(#616161, 0.1);
    color: #616161;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  hr {
    margin: 1rem 0;
  }

  blockquote {
    padding-left: 1rem;
    border-left: 2px solid rgba(#0d0d0d, 0.1);
  }

  pre {
    background: #0d0d0d;
    color: #fff;
    font-family: 'JetBrainsMono', monospace;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;

    code {
      color: inherit;
      padding: 0;
      background: none;
      font-size: 0.8rem;
    }

    .hljs-comment,
    .hljs-quote {
      color: #616161;
    }

    .hljs-variable,
    .hljs-template-variable,
    .hljs-attribute,
    .hljs-tag,
    .hljs-name,
    .hljs-regexp,
    .hljs-link,
    .hljs-name,
    .hljs-selector-id,
    .hljs-selector-class {
      color: #f98181;
    }

    .hljs-number,
    .hljs-meta,
    .hljs-built_in,
    .hljs-builtin-name,
    .hljs-literal,
    .hljs-type,
    .hljs-params {
      color: #fbbc88;
    }

    .hljs-string,
    .hljs-symbol,
    .hljs-bullet {
      color: #b9f18d;
    }

    .hljs-title,
    .hljs-section {
      color: #faf594;
    }

    .hljs-keyword,
    .hljs-selector-tag {
      color: #70cff8;
    }

    .hljs-emphasis {
      font-style: italic;
    }

    .hljs-strong {
      font-weight: 700;
    }
  }

  table {
    border-collapse: collapse;
    table-layout: fixed;
    width: 100%;
    margin: 0;
    overflow: hidden;

    td,
    th {
      min-width: 1em;
      border: 2px solid #ced4da;
      padding: 3px 5px;
      vertical-align: top;
      box-sizing: border-box;
      position: relative;

      > * {
        margin-bottom: 0;
      }
    }

    th {
      font-weight: bold;
      text-align: left;
      background-color: #f1f3f5;
    }

    .selectedCell:after {
      z-index: 2;
      position: absolute;
      content: '';
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: rgba(200, 200, 255, 0.4);
      pointer-events: none;
    }

    .column-resize-handle {
      position: absolute;
      right: -2px;
      top: 0;
      bottom: -2px;
      width: 4px;
      background-color: #adf;
      pointer-events: none;
    }

    p {
      margin: 0;
    }
  }

  iframe {
    border: 8px solid #000;
    border-radius: 4px;
    min-width: 200px;
    min-height: 200px;
    display: block;
    outline: 0px solid transparent;
  }

  div[data-youtube-video] {
    cursor: move;
    padding-right: 24px;
  }

  .ProseMirror-selectednode iframe {
    transition: outline 0.15s;
    outline: 6px solid #ece111;
  }
}

.tableWrapper {
  padding: 1rem 0;
  overflow-x: auto;
}

.resize-cursor {
  cursor: ew-resize;
  cursor: col-resize;
}

mark {
  background-color: #ffe066;
  padding: 0.125em 0;
  border-radius: 0.25em;
  box-decoration-break: clone;
}

.mention {
  border: 1px solid #000;
  border-radius: 0.4rem;
  padding: 0.1rem 0.3rem;
  box-decoration-break: clone;
}

ul[data-type='taskList'] {
  list-style: none;
  padding: 0;

  p {
    margin: 0;
  }

  li {
    display: flex;

    > label {
      flex: 0 0 auto;
      margin-right: 0.5rem;
      user-select: none;
    }

    > div {
      flex: 1 1 auto;
    }
  }
}

.bubble-menu {
  display: flex;
  background-color: #0d0d0d;
  padding: 0.2rem;
  border-radius: 0.5rem;

  button {
    border: none;
    background: none;
    color: #fff;
    font-size: 0.85rem;
    font-weight: 500;
    padding: 0 0.2rem;
    opacity: 0.6;

    &:hover,
    &.is-active {
      opacity: 1;
    }
  }
}

.floating-menu {
  display: flex;
  background-color: #0d0d0d10;
  padding: 0.2rem;
  border-radius: 0.5rem;

  button {
    border: none;
    background: none;
    font-size: 0.85rem;
    font-weight: 500;
    padding: 0 0.2rem;
    opacity: 0.6;

    &:hover,
    &.is-active {
      opacity: 1;
    }
  }
}
</style>
