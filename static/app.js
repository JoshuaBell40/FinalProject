document.addEventListener('DOMContentLoaded', () => {
    // Dark mode toggle
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = '🌙';
    document.body.appendChild(themeToggle);

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        themeToggle.innerHTML = theme === 'light' ? '🌙' : '☀️';
    }

    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-button');
    const taskItems = document.querySelectorAll('.task-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.dataset.filter;
            filterTasks(filter);
        });
    });

    function filterTasks(filter) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        taskItems.forEach(item => {
            const isCompleted = item.dataset.completed === 'true';
            const dueDateStr = item.dataset.dueDate;
            
            // Reset classes
            item.classList.remove('overdue', 'due-soon');
            
            // Add status classes based on due date
            if (dueDateStr) {
                const dueDate = new Date(dueDateStr);
                dueDate.setHours(0, 0, 0, 0);
                
                if (dueDate < today) {
                    item.classList.add('overdue');
                } else if (dueDate.getTime() === today.getTime()) {
                    item.classList.add('due-soon');
                }
            }

            // Apply filter
            let showItem = true;
            switch (filter) {
                case 'active':
                    showItem = !isCompleted;
                    break;
                case 'completed':
                    showItem = isCompleted;
                    break;
                case 'today':
                    if (dueDateStr) {
                        const dueDate = new Date(dueDateStr);
                        dueDate.setHours(0, 0, 0, 0);
                        showItem = dueDate.getTime() === today.getTime();
                    } else {
                        showItem = false;
                    }
                    break;
                case 'upcoming':
                    if (dueDateStr) {
                        const dueDate = new Date(dueDateStr);
                        dueDate.setHours(0, 0, 0, 0);
                        showItem = dueDate > today;
                    } else {
                        showItem = false;
                    }
                    break;
                case 'all':
                default:
                    showItem = true;
                    break;
            }

            // Apply display style with animation
            if (showItem) {
                item.style.display = 'flex';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, 10);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'translateY(-10px)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });

        // Update task count display
        updateTaskCounts();
    }

    function updateTaskCounts() {
        const totalTasks = taskItems.length;
        const completedTasks = Array.from(taskItems).filter(item => item.dataset.completed === 'true').length;
        const activeTasks = totalTasks - completedTasks;
        
        // Update filter button text with counts
        filterButtons.forEach(button => {
            const filter = button.dataset.filter;
            const icon = button.querySelector('i').cloneNode(true);
            button.innerHTML = '';
            button.appendChild(icon);
            
            switch (filter) {
                case 'all':
                    button.appendChild(document.createTextNode(` All Tasks (${totalTasks})`));
                    break;
                case 'active':
                    button.appendChild(document.createTextNode(` Active (${activeTasks})`));
                    break;
                case 'completed':
                    button.appendChild(document.createTextNode(` Completed (${completedTasks})`));
                    break;
                default:
                    button.appendChild(document.createTextNode(` ${button.dataset.filter}`));
            }
        });
    }

    // Task item animations
    taskItems.forEach(item => {
        item.style.transition = 'all 0.3s ease';
        
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateX(5px) translateY(-2px)';
        });
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateX(0) translateY(0)';
        });
    });

    // Add smooth transitions for task completion
    const checkboxes = document.querySelectorAll('.task-checkbox');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const taskText = checkbox.nextElementSibling;
            const taskItem = checkbox.closest('.task-item');
            
            if (checkbox.checked) {
                taskText.classList.add('completed');
                taskItem.dataset.completed = 'true';
            } else {
                taskText.classList.remove('completed');
                taskItem.dataset.completed = 'false';
            }
            
            // Update task counts after completion status change
            updateTaskCounts();
        });
    });

    // Initialize with 'all' filter
    filterTasks('all');
}); 