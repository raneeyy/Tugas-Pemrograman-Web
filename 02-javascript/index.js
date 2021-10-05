const selectItem = document.getElementById('datalist');
const list = document.getElementById('list');

function show() {
    
    const entry = list.getElementsByTagName('li');
    for (let i = 0; i < entry.length; i++) {
        text = entry[i].innerText;
        lastSpace = text.lastIndexOf(" ");
        value = text.substring(0, lastSpace);
        if (value === selectItem.select.value) {
            alert("Duplicate item found! Please add another item.");
            selectItem.select.value = document.getElementById('none').value;
            return;    
        }
    }

    if (selectItem.select.value == "What book do you want to buy?") {
        alert("Please choose the item.");
    } else {
        const item = document.createElement('li');
        item.textContent = selectItem.select.value;
        item.style.fontFamily="Warung Kopi Regular";
        item.style.fontSize="21px";

        const button = document.createElement('button');
        button.textContent = "X";
        button.style.fontFamily="Arial";
        button.style.fontSize="16px";
        button.style.color="red";
        button.addEventListener('click', clickListener);
        function clickListener() {
            item.remove();
            button.remove();
        }

        list.append(item);
        item.append(" ", button);

        selectItem.select.value = document.getElementById('none').value;
    }
}