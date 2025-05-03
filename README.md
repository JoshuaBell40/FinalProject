# FinalProject - Modern To-Do App
A modern, feature-rich to-do application built with Flask and Python. This is the final project for my problem solving with software class.

# Team Members
- Joshua Von Bell

# Modern To-Do App – Project Proposal

## 1. The Big Idea
My project is a modern to-do application that helps users manage their tasks efficiently. The app features a beautiful, responsive interface with dark mode support, task prioritization, and due date management. Users can add, complete, and filter tasks based on different criteria, making it easy to stay organized.

**Minimum Viable Product (MVP):**
- Add, edit, and delete tasks
- Mark tasks as complete/incomplete
- Set task priorities (High, Medium, Low)
- Add due dates to tasks
- Basic filtering options

**Stretch Goals:**
- Dark/Light mode toggle
- Advanced filtering with animations
- Visual indicators for overdue tasks
- Task counts and statistics
- Responsive design for all devices

## 2. Learning Objectives
- Learn Flask web development
- Understand modern CSS techniques (Flexbox, Grid, Animations)
- Practice JavaScript DOM manipulation
- Implement responsive design principles
- Work with JSON for data storage

## 3. Implementation Plan
We'll use Python with Flask for the backend and modern HTML/CSS/JavaScript for the frontend. Tasks will be stored in a JSON file for persistence.

Key technologies:
- Flask for the web framework
- Modern CSS for styling
- Vanilla JavaScript for interactions
- JSON for data storage
- Font Awesome for icons
- Google Fonts for typography

## 4. Project Schedule
| Week        | Goal                                      |
|-------------|-------------------------------------------|
| Apr 7-12    | Set up basic Flask app and task structure |
| Apr 13-19   | Implement task CRUD operations            |
| Apr 20-26   | Add priority and due date features        |
| Apr 27-May 2| Implement filtering and dark mode         |
| May 3       | Final submission (README + code)          |

## 5. Collaboration Plan
Working solo. Using GitHub to version control all progress. All code and documentation will be committed as I go.

## 6. Risks and Limitations
- Ensuring smooth animations across different browsers
- Managing state between frontend and backend
- Handling date comparisons and time zones
- Maintaining performance with large task lists

## 7. Additional Course Content
- More examples of modern web design patterns
- Advanced CSS techniques
- JavaScript best practices
- Flask routing and templating

# Modern To-Do Application

A feature-rich to-do web application built with Python and Flask.

## Features
- Add, edit, and delete tasks
- Set task priorities (High, Medium, Low)
- Add due dates to tasks
- Mark tasks as complete/incomplete
- Filter tasks by status and due date
- Dark/Light mode toggle
- Responsive design
- Beautiful animations and transitions

## Requirements
- Python 3.x
- Flask
- Modern web browser

## Installation
1. Clone this repository
2. Install the required packages:
   ```
   pip install -r requirements.txt
   ```

## Running the Application
1. Navigate to the project directory
2. Run the application:
   ```
   python app.py
   ```
3. Open your web browser and go to `http://localhost:5000`

## Usage
- To add a task: Enter your task, select priority and due date (optional), then click "Add Task"
- To complete a task: Click the checkbox next to the task
- To delete a task: Click the "Delete" button next to the task
- To filter tasks: Use the filter buttons at the top
- To toggle dark mode: Click the theme button in the top-right corner

Note: Tasks are stored in a JSON file and will persist between application restarts.
