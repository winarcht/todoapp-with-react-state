A TodoApp implementation using React state only.

Based on create-react-app.

The application consists of three sections:
<ol>
  <li>AddTodo form, where user can add new tasks.</li>
  <li>TodoList, a list of tasks that have been added.</li>
  <li>Footer, containing a status and filters.</li>
</ol>

Each of those sections have been optimized using <em>shouldComponentUpdate</em>, so they are only re-rendered when the related states changed (instead of re-rendered when the <strong>whole</strong> state changed).
