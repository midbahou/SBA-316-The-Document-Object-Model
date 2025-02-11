# To-Do List Web Application

## **Project Description**
This project is a simple and interactive to-do list web application designed using HTML, CSS, and JavaScript. The application allows users to manage their tasks efficiently by adding, viewing, and deleting tasks dynamically. The project demonstrates proficiency in using the Document Object Model (DOM) to manipulate and interact with webpage elements and key features of the Browser Object Model (BOM) to enhance user interactions and provide a better experience.

---

## **Features**
- Add tasks to the list.
- View tasks dynamically in a styled list.
- Delete tasks individually using a dedicated delete button.
- User input validation to prevent empty task entries.
- Automatic clearing of the input field after task submission.
- Console logs for navigating and tracking tasks.

---

## **Technologies Used**
- **HTML:** Provides the structure of the application.
- **CSS:** Adds styling and improves the user interface.
- **JavaScript:** Handles dynamic task management, user interactions, DOM manipulation, and BOM Properties and Methods.

---

## **How to Use the Application**
1. Open the `index.html` file in your web browser.
2. Enter a task in the input field.
3. Click the "Add Task" button or press `Enter` to add the task to the list.
4. View tasks as they are dynamically displayed below the input field.
5. Click the red `X` next to any task to delete it from the list.

---

## **Key DOM Manipulations**
1. **Element Selection:**
   - `getElementById()` and `querySelector()` are used to select and cache elements.
2. **Dynamic Element Creation:**
   - Tasks are dynamically created using `createElement()`.
   - Task elements are appended to the list using `appendChild()`.
3. **Event Handling:**
   - Event listeners are registered for button clicks and task deletions.
4. **Parent-Child-Sibling Navigation:**
   - `firstElementChild`, `nextElementSibling`, and `children` are used to navigate task elements.
5. **Form and Input Handling:**
   - Form submission is handled with `preventDefault()` to manage task entry.
6. **BOM Event Usage:**
   - `window.addEventListener("load", createTaskList)` logs tasks when the page loads.

---

## **BOM Properties and Methods Used**
1. **window.alert():** Used to inform users when they attempt to add an empty task.

2. **window.confirm():** Used to confirm task deletion before removing a task from the list.

```

---

## **Future Improvements**
- Implement task filtering (e.g., show only completed tasks).
- Add the ability to mark tasks as completed.
- Improve CSS animations.
- Persistent storage using `localStorage`.

---

## **Challenges and Blockers**
- Ensuring proper navigation between task elements using sibling relationships.
- Handling edge cases for empty task entries.
- Browser compatibility for some DOM features.

---

## **Conclusion**
This project demonstrates practical application of the Document Object Model (DOM) concepts and event-driven programming in JavaScript. It provides a solid foundation for building more complex web applications.

