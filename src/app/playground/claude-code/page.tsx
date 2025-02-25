import React from "react";
import PlaygroundLayout from "../PlaygroundLayout";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const title = "Claude Code Playground";
const description = "Showcasing how Claude AI created this entire demo, including all code, examples, and explanations, based on the structure of this portfolio.";

const ClaudeCodeInput = `// Generate a React component that displays a list of todos with the ability to add, remove, and mark as complete
function createTodoApp() {
  // Code should include:
  // 1. State management for todos
  // 2. Add todo functionality
  // 3. Remove todo functionality
  // 4. Toggle completion status
  // 5. Clean UI with Tailwind CSS
}`;

const ClaudeCodeOutput = `import { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim() === '') return;
    setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
    setInput('');
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Todo List</h1>
      
      <div className="flex mb-4">
        <input
          type="text"
          className="flex-1 border rounded-l px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new todo"
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
        />
        <button 
          onClick={addTodo}
          className="bg-indigo-600 text-white px-4 py-2 rounded-r hover:bg-indigo-700 transition"
        >
          Add
        </button>
      </div>
      
      <ul className="space-y-2">
        {todos.map(todo => (
          <li 
            key={todo.id}
            className="flex items-center p-2 border rounded group hover:bg-gray-50"
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
              className="mr-2 h-5 w-5 text-indigo-600"
            />
            <span className={\`flex-1 \${todo.completed ? 'line-through text-gray-400' : 'text-gray-800'}\`}>
              {todo.text}
            </span>
            <button
              onClick={() => removeTodo(todo.id)}
              className="text-red-500 opacity-0 group-hover:opacity-100 transition"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      
      {todos.length === 0 && (
        <p className="text-gray-500 text-center py-4">No todos yet! Add some above.</p>
      )}
    </div>
  );
}

export default TodoApp;`;

const ClaudeCodePlayground: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-gray-100 p-4 rounded-md">
        <h3 className="text-lg font-medium mb-3">Prompt:</h3>
        <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
          {ClaudeCodeInput}
        </SyntaxHighlighter>
      </div>
      
      <div className="bg-gray-100 p-4 rounded-md">
        <h3 className="text-lg font-medium mb-3">Claude&apos;s Response:</h3>
        <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
          {ClaudeCodeOutput}
        </SyntaxHighlighter>
      </div>
      
      <div className="mt-6 p-4 border border-indigo-200 rounded-lg bg-indigo-50">
        <h3 className="text-lg font-medium mb-2 text-indigo-700">100% Created by Claude</h3>
        <p className="mb-2 text-indigo-900">
          Everything you see in this playground—including all code, examples, and explanations—was 
          created entirely by Claude AI based on examining the structure of this portfolio site.
        </p>
        <ul className="list-disc list-inside space-y-1 text-indigo-900">
          <li>Context-aware code generation matching your existing project style</li>
          <li>Follows your repository&apos;s established patterns and practices</li>
          <li>Tailwind CSS integration matching your existing components</li>
          <li>Complete working component with all requested features</li>
          <li>Clean, readable, maintainable code that fits your codebase</li>
        </ul>
      </div>
    </div>
  );
};

const BlogContent: React.FC = () => (
  <div className="space-y-6">
    <section>
      <h3 className="text-xl font-semibold mb-2">How Claude Created This Entire Playground</h3>
      <p>
        This entire playground demo—from concept to implementation—was created by Claude AI by examining the 
        structure of this portfolio site. Claude analyzed the existing code patterns, component structures, 
        styling approaches, and project organization to create a perfectly integrated new playground that 
        matches the style and functionality of the rest of the site.
      </p>
    </section>

    <section>
      <h3 className="text-xl font-semibold mb-2">Code Generation Process</h3>
      <p>
        In building this playground, Claude:
      </p>
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li>Analyzed the existing playground structure and component patterns</li>
        <li>Identified the PlaygroundLayout component and its usage requirements</li>
        <li>Created a new playground that follows the established patterns</li>
        <li>Generated example code (the Todo app) that matches the Tailwind CSS styling of the portfolio</li>
        <li>Wrote all the explanatory content in a style consistent with the rest of the site</li>
      </ul>
      <p className="mt-2">
        All of this was done by examining the codebase and producing a new playground that seamlessly 
        integrates with the existing structure—demonstrating how Claude can understand and extend 
        your projects while maintaining consistency.
      </p>
    </section>

    <section>
      <h3 className="text-xl font-semibold mb-2">Beyond This Demo</h3>
      <p>
        Claude can assist with virtually any coding task across your development workflow:
      </p>
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li><strong>Creating new features:</strong> Just like this playground, complete with components and styling</li>
        <li><strong>Extending existing code:</strong> Adding new functionality that matches your code patterns</li>
        <li><strong>Debugging:</strong> Analyzing errors and suggesting fixes that fit your codebase</li>
        <li><strong>Refactoring:</strong> Restructuring code while maintaining compatibility and style consistency</li>
        <li><strong>Documentation:</strong> Creating explanations that match your project&apos;s documentation style</li>
      </ul>
    </section>

    <section>
      <h3 className="text-xl font-semibold mb-2">Meta: Claude Created This Explanation Too</h3>
      <p>
        Even this explanation was created by Claude as part of the demonstration. By examining your codebase,
        Claude can create content that feels like a natural extension of your existing work, whether that&apos;s
        code, documentation, or explanatory content.
      </p>
      <p className="mt-2">
        The most effective way to use Claude is to provide clear requirements and examples of your existing work—
        just as was done to create this playground. With that context, Claude can create code and content that
        feels like it was written by the same person who built the rest of your project.
      </p>
    </section>
  </div>
);

const ClaudeCodePage: React.FC = () => (
  <PlaygroundLayout
    title={title}
    description={description}
    blogContent={<BlogContent />}
  >
    <ClaudeCodePlayground />
  </PlaygroundLayout>
);

export default ClaudeCodePage;