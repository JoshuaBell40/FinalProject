from flask import Flask, render_template, request, redirect, url_for, jsonify
import json
import os
from datetime import datetime, date

app = Flask(__name__, static_folder='static')

# File to store tasks
TASKS_FILE = 'tasks.json'

def load_tasks():
    if os.path.exists(TASKS_FILE):
        with open(TASKS_FILE, 'r') as f:
            return json.load(f)
    return []

def save_tasks(tasks):
    with open(TASKS_FILE, 'w') as f:
        json.dump(tasks, f)

@app.route('/')
def index():
    tasks = load_tasks()
    today = date.today().isoformat()
    return render_template('index.html', tasks=tasks, today=today)

@app.route('/add', methods=['POST'])
def add_task():
    task = request.form.get('task')
    priority = request.form.get('priority', 'medium')
    due_date = request.form.get('due_date')
    
    if task:
        tasks = load_tasks()
        tasks.append({
            'text': task,
            'completed': False,
            'priority': priority,
            'due_date': due_date
        })
        save_tasks(tasks)
    return redirect(url_for('index'))

@app.route('/delete/<int:task_id>')
def delete_task(task_id):
    tasks = load_tasks()
    if 0 <= task_id < len(tasks):
        tasks.pop(task_id)
        save_tasks(tasks)
    return redirect(url_for('index'))

@app.route('/toggle/<int:task_id>')
def toggle_task(task_id):
    tasks = load_tasks()
    if 0 <= task_id < len(tasks):
        tasks[task_id]['completed'] = not tasks[task_id]['completed']
        save_tasks(tasks)
    return redirect(url_for('index'))

@app.route('/edit/<int:task_id>', methods=['POST'])
def edit_task(task_id):
    tasks = load_tasks()
    if 0 <= task_id < len(tasks):
        new_text = request.form.get('text')
        new_priority = request.form.get('priority')
        new_due_date = request.form.get('due_date')
        
        if new_text:
            tasks[task_id]['text'] = new_text
        if new_priority:
            tasks[task_id]['priority'] = new_priority
        if new_due_date:
            tasks[task_id]['due_date'] = new_due_date
            
        save_tasks(tasks)
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True) 