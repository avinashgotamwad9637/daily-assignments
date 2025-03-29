document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("itemsContainer");
    const addItemBtn = document.getElementById("addItem");
    const shuffleBtn = document.getElementById("shuffleButton");

    // Dynamic Item addition In Box
    addItemBtn.addEventListener("click", function () {
        let newItem = document.createElement("div");
        newItem.className = "child";
        newItem.textContent = "New Item";
        newItem.setAttribute("draggable", "true");

        addDragAndExpandListeners(newItem);
        container.appendChild(newItem);
    });

    //  Drag and Drop Feature onClick
    function addDragAndExpandListeners(item) {
        item.addEventListener("click", function () {
            item.classList.toggle("expanded");
            item.textContent = item.classList.contains("expanded") ? "Expanded Content" : "New Item";
        });

        item.addEventListener("dragstart", function (event) {
            event.dataTransfer.setData("text/plain", event.target.outerHTML);
            event.target.classList.add("dragging");
        });

        item.addEventListener("dragend", function () {
            item.classList.remove("dragging");
        });
    }

    // Apply Drag Listeners to Initial Items
    document.querySelectorAll(".child").forEach(addDragAndExpandListeners);

    container.addEventListener("dragover", function (event) {
        event.preventDefault();
        const draggingItem = document.querySelector(".dragging");
        const afterElement = getDragAfterElement(event.clientY);
        if (afterElement == null) {
            container.appendChild(draggingItem);
        } else {
            container.insertBefore(draggingItem, afterElement);
        }
    });

    function getDragAfterElement(y) {
        const draggableElements = [...container.querySelectorAll(".child:not(.dragging)")];

        return draggableElements.reduce(
            (closest, child) => {
                const box = child.getBoundingClientRect();
                const offset = y - box.top - box.height / 2;
                return offset < 0 && offset > closest.offset ? { offset, element: child } : closest;
            },
            { offset: Number.NEGATIVE_INFINITY }
        ).element;
    }

    // Shuffle Items onClick
    shuffleBtn.addEventListener("click", function () {
        const items = [...container.children];
        items.sort(() => Math.random() - 0.5);
        items.forEach(item => container.appendChild(item));
    });
});
