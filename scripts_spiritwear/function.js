var itemTable = new function () {

    // AN ARRAY OF JSON OBJECTS WITH VALUES.
    this.header = [{ "#": "", "Item:": "", "Size:": "", "Color:": "", "Design:": "", "Customization (add $7):": "", "Cost:": "" }]
    this.col = [];

    var itemArray = ["-- select an item --", "Cotton Knit Face Mask", "Tie-Die Face Mask", "Ladies Organic Short Sleeve Tee", "Short Sleeve Tee", "Youth Pullover Hoodie", "Pullover Hoodie", "Youth Full Zip Hoodie", "Full Zip Hoodie", "Youth Sponge Fleece Crew Sweat", "Adult Sponge Fleece Crew Sweat",
                    "Tie-Die All-In-One Lounger", "Short Sleeve Tie-Dye", "Youth Tie-Die Hooded Sweat", "Adult Tie-Dye Hooded Sweat", "Youth Long Sleeve Tie-Dye", "Adult Long Sleeve Tie-Dye", "Flannel Pants", "Blanket"];
    var itemList = document.createElement("select");
    itemList.setAttribute('name', 'Item');
    for (var i = 0; i < itemArray.length; i++) {
        var itemOption = document.createElement("option");
        itemOption.setAttribute("value", itemArray[i]);
        itemOption.text = itemArray[i];
        if (i == 0) { itemOption.disabled = true; }
        itemList.selectedIndex = 0;
        itemList.appendChild(itemOption);
    }

    var sizeArray = ["-- select a size --", "No item selected"];
    var sizeList = document.createElement("select");
    sizeList.setAttribute('name', 'Size');
    for (var s = 0; s < sizeArray.length; s++) {
        var sizeOption = document.createElement("option");
        sizeOption.setAttribute("value", sizeArray[s]);
        sizeOption.text = sizeArray[s];
        if (s == 0 || s == 1) { sizeOption.disabled = true; }
        sizeList.selectedIndex = 0;
        sizeList.appendChild(sizeOption);
    }

    var colorArray = ["-- select a color --", "No item selected"];
    var colorList = document.createElement("select");
    colorList.setAttribute('name', 'Color');
    for (var c = 0; c < colorArray.length; c++) {
        var colorOption = document.createElement("option");
        colorOption.setAttribute("value", colorArray[c]);
        colorOption.text = colorArray[c];
        if (c == 0 || c == 1) { colorOption.disabled = true; }
        colorList.selectedIndex = 0;
        colorList.appendChild(colorOption);
    }

	var designString = document.createElement('input');
	designString.setAttribute('type', 'text');
	designString.setAttribute('value', 'A');
	designString.style.display = "none";

    var customtxt = document.createElement("input");
    customtxt.setAttribute('type', 'text');
    customtxt.setAttribute('value', '');
    customtxt.setAttribute("placeholder", "Custom Name ($7)");

    var costArray = [0];
    var itemCost = document.createElement("string");
    itemCost.textContent = "$"+costArray[itemList.selectedIndex];
    var costString = document.createElement('input');
    costString.setAttribute('type', 'text');
    costString.setAttribute('value', itemCost.textContent);
    costString.style.display = "none";

	var total = 0;
    var totalCost = document.createElement("string");
    totalCost.textContent = "$"+total;
    totalCost.setAttribute('style', 'color: yellow;');
    var totalString = document.createElement('input');
    totalString.setAttribute('type', 'text');
    totalString.setAttribute('name', 'Total Cost');
    totalString.setAttribute('value', totalCost.textContent);
    totalString.style.display = "none";

    var orderString = document.createElement("string");
	orderString.setAttribute('name', 'Order_String');
    orderString.textContent = "";
    orderString.style.display = "none";
	var orderList = document.createElement("textArea");
    orderList.setAttribute('type', 'text');
    orderList.setAttribute('name', 'Order');
	orderList.innerHTML += orderString.textContent;
    orderList.style.display = "none";

        this.createTable = function () {
            // EXTRACT VALUE FOR TABLE HEADER.
            for (var i = 0; i < this.header.length; i++) {
                for (var key in this.header[i]) {
                    if (this.col.indexOf(key) === -1) {
                        this.col.push(key);
                    }
                }
            }

            // CREATE A TABLE.
            var table = document.createElement('table');
            table.setAttribute('id', 'itemsTable');     // SET TABLE ID.
            table.style.width = "100%";
            var tr = table.insertRow(-1);               // CREATE A ROW (FOR HEADER).


            for (var h = 0; h < this.col.length; h++) {
                // ADD TABLE HEADER.
                var th = document.createElement('th');
                th.innerHTML = this.col[h].replace('_', ' ');
                th.setAttribute('style', 'background-color: white; border-radius: 10px; color: black; font-weight: bold; text-align: center; padding-left: 5px; padding-right: 5px;');
                tr.appendChild(th);
            }

            // ADD ROWS USING JSON DATA.
            for (var i = 1; i < this.header.length; i++) {
                tr = table.insertRow(-1);           // CREATE A NEW ROW.
                for (var j = 0; j < this.col.length; j++) {
                    var tabCell = tr.insertCell(-1);
                    tabCell.innerHTML = this.header[i][this.col[j]];
                }

                // DYNAMICALLY CREATE AND ADD ELEMENTS TO TABLE CELLS WITH EVENTS.
                this.td = document.createElement('td');

/*
                // *** CANCEL OPTION.
                tr.appendChild(this.td);
                var lblCancel = document.createElement('label');
                lblCancel.innerHTML = '✖';
                lblCancel.setAttribute('onclick', 'itemTable.Cancel(this)');
                lblCancel.setAttribute('style', 'display:none;');
                lblCancel.setAttribute('title', 'Cancel');
                lblCancel.setAttribute('id', 'lbl' + i);
                this.td.appendChild(lblCancel);

                // *** SAVE.
                tr.appendChild(this.td);
                var btSave = document.createElement('input');
                btSave.setAttribute('type', 'button');      // SET ATTRIBUTES.
                btSave.setAttribute('value', 'Save');
                btSave.setAttribute('id', 'Save' + i);
                btSave.setAttribute('style', 'display:none;');
                btSave.setAttribute('onclick', 'itemTable.Save(this)');       // ADD THE BUTTON's 'onclick' EVENT.
                this.td.appendChild(btSave);

                // *** EDIT.
                tr.appendChild(this.td);
                var btEdit = document.createElement('input');
                btEdit.setAttribute('type', 'button');    // SET ATTRIBUTES.
                btEdit.setAttribute('value', 'Edit');
                btEdit.setAttribute('id', 'Edit' + i);
                btEdit.setAttribute('style', 'border-radius: 10px; background-color:#44CCEB; width: 56px;');
                btEdit.setAttribute('onclick', 'itemTable.Update(this)');   // ADD THE BUTTON's 'onclick' EVENT.
                this.td.appendChild(btEdit);
*/

                // *** DELETE.
                this.td = document.createElement('th');
                tr.appendChild(this.td);
                var btDelete = document.createElement('input');
                btDelete.setAttribute('type', 'button');    // SET INPUT ATTRIBUTE.
                btDelete.setAttribute('value', 'Delete');
                btDelete.setAttribute('style', 'border-radius: 10px; background-color: #ED5650; width: 56px;');
                btDelete.setAttribute('onclick', 'itemTable.Delete(this)');   // ADD THE BUTTON's 'onclick' EVENT.
                this.td.appendChild(btDelete);
            }

            // ADD A ROW AT THE END (FOR NEW ENTRY).
            tr = table.insertRow(-1);

			tr = table.insertRow(-1);
            for (var j = 0; j < this.col.length; j++) {
                var newCell = tr.insertCell(-1);
				newCell.setAttribute('style', 'border: 0 solid #FFFFFF; border-bottom-width: 1px; padding-bottom: 0.5ex;');
            }

			tr = table.insertRow(-1);
            for (var j = 0; j < this.col.length; j++) {
                var newCell = tr.insertCell(-1);
				if (j == 5) { var totalString = document.createElement('string'); totalString.textContent = "Total:"; totalString.setAttribute('style', 'padding-right: 10px; font-weight: bold; color: yellow;'); newCell.appendChild(totalString); newCell.style.textAlign = "right"; }
				if (j == 6) { newCell.appendChild(totalString); newCell.appendChild(totalCost); }
            }

			tr = table.insertRow(-1);
            for (var j = 0; j < this.col.length; j++) { var newCell = tr.insertCell(-1); newCell.setAttribute('style', 'height: 20px'); }

			tr = table.insertRow(-1);
            for (var j = 0; j < this.col.length; j++) {
                var newCell = tr.insertCell(-1);
				if (j == 0) { newCell.appendChild(orderList); newCell.appendChild(orderString); }
                if (j == 1) { newCell.appendChild(itemList); }
                if (j == 2) { newCell.appendChild(sizeList); }
                if (j == 3) { newCell.appendChild(colorList); }
                if (j == 4) {
                    var radioA = document.createElement('input');          // RADIO BUTTONS
                    var radioB = document.createElement('input');
                    radioA.setAttribute('type', 'radio');
                    radioB.setAttribute('type', 'radio');
                    radioA.setAttribute('name', 'Design');
                    radioB.setAttribute('name', 'Design');
                    radioA.setAttribute('value', 'A');
                    radioB.setAttribute('value', 'B');
                    var labelA = document.createElement('label');
                    labelA.htmlFor = 'radioA';
                    var descA = document.createTextNode('A');
                    labelA.appendChild(descA);
                    var labelB = document.createElement('label');
                    labelB.htmlFor = 'radioB';
                    var descB = document.createTextNode('B');
                    labelB.appendChild(descB);
                    radioA.checked = true;
                    radioA.setAttribute("onclick", "radioClick()");
                    radioB.setAttribute("onclick", "radioClick()");
                    radioClick = function() {
                        if (radioA.checked == true) { designString.setAttribute('value', 'A'); }
                        else { designString.setAttribute('value', 'B'); }
                    }
                    newCell.appendChild(designString);
                    newCell.appendChild(radioA);
                    newCell.appendChild(labelA);
                    newCell.appendChild(radioB);
                    newCell.appendChild(labelB);
                }
                if (j == 5) {
                    newCell.appendChild(customtxt);
                }
                if (j == 6) {
                    newCell.appendChild(costString);
                    newCell.appendChild(itemCost);
                }
            }

            // HIDE 1st COLUMN (containing '#')
            for (var i = 0; i < table.rows.length; i++) {
                for (var j = 0; j < table.rows[i].cells.length; j++) {
                    table.rows[i].cells[j].style.display = "";
                    if (j == 0) { table.rows[i].cells[j].style.display = "none"; }
                }
            }

            this.td = document.createElement('td');
            tr.appendChild(this.td);
            var btNew = document.createElement('input');
            btNew.setAttribute('type', 'button');       // SET ATTRIBUTES.
            btNew.setAttribute('value', 'ADD');
            btNew.setAttribute('id', 'New' + i);
            btNew.setAttribute('style', 'font-weight: bold; border-radius: 10px; background-color: lightgreen; width: 56px;');
            btNew.setAttribute('onclick', 'itemTable.CreateNew(this)');       // ADD THE BUTTON's 'onclick' EVENT.
            this.td.appendChild(btNew);

            var div = document.getElementById('container');
            div.innerHTML = '';
            div.appendChild(table);    // ADD THE TABLE TO THE WEB PAGE.

            var addNote = document.createElement("string");
            addNote.setAttribute('style', 'font-style: italic; color: yellow;');
            addNote.textContent = "NOTE: Please be sure to click 'ADD' after selecting each item prior to 'CHECKOUT' to properly add item to order.";
            div.appendChild(addNote);
        };

// ****** OPERATIONS START.

/*
        // CANCEL.
        this.Cancel = function (oButton) {

            // HIDE THIS BUTTON.
            oButton.setAttribute('style', 'display:none; float:none;');
            var activeRow = oButton.parentNode.parentNode.rowIndex;

            // HIDE THE SAVE BUTTON.
            var btSave = document.getElementById('Save' + (activeRow - 1));
            btSave.setAttribute('style', 'display:none;');

            // SHOW THE UPDATE BUTTON AGAIN.
            var btEdit = document.getElementById('Edit' + (activeRow - 1));
            btEdit.setAttribute('style', 'display:block; margin:0 auto; background-color:#44CCEB;');

            var tab = document.getElementById('itemsTable').rows[activeRow];

            for (i = 0; i < this.col.length; i++) {
                var td = tab.getElementsByTagName("td")[i];
                td.innerHTML = this.header[(activeRow - 1)][this.col[i]];
            }
        }

        // EDIT DATA.
        this.Update = function (oButton) {
            var activeRow = oButton.parentNode.parentNode.rowIndex;
            var tab = document.getElementById('itemsTable').rows[activeRow];

            // SHOW A DROPDOWN LIST WITH A LIST OF CATEGORIES.
            for (i = 1; i < 5; i++) {
                if (i == 4) {
                    var td = tab.getElementsByTagName("td")[i];
                    var ele = document.createElement('select');      // DROPDOWN LIST.
                    ele.innerHTML = '<option value="' + td.innerText + '">' + td.innerText + '</option>';
                    for (k = 0; k < this.itemArray.length; k++) { ele.innerHTML = ele.innerHTML + '<option value="' + this.itemArray[k] + '">' + this.itemArray[k] + '</option>'; }
                    td.innerText = '';
                    td.appendChild(ele);
                }
                else {
                    var td = tab.getElementsByTagName("td")[i];
                    var ele = document.createElement('input');      // TEXTBOX.
                    ele.setAttribute('type', 'text');
                    ele.setAttribute('value', td.innerText);
                    td.innerText = '';
                    td.appendChild(ele);
                }
            }

            var lblCancel = document.getElementById('lbl' + (activeRow - 1));
            lblCancel.setAttribute('style', 'cursor:pointer; display:block; width:20px; float:left; position: absolute;');

            var btSave = document.getElementById('Save' + (activeRow - 1));
            btSave.setAttribute('style', 'display:block; margin-left:30px; float:left; border-radius: 10px; background-color:#2DBF64; width: 56px;');

            // HIDE THIS BUTTON.
            oButton.setAttribute('style', 'display:none;');
        };
*/

        // DELETE DATA.
        this.Delete = function (oButton) {
            var activeRow = oButton.parentNode.parentNode.rowIndex;
			var costStr = document.getElementById('itemsTable').rows[activeRow].cells[6].innerHTML;
			var costRep = costStr.replace('$', '');
			total -= costRep;
			total = Math.round(total * 100) / 100;
            totalCost.textContent = "$" + total;
			totalString.setAttribute('value', totalCost.textContent);
            this.header.splice((activeRow), 1); // DELETE THE ACTIVE ROW.
			this.createTable(); // REFRESH THE TABLE.
        };

/*
        // SAVE DATA.
        this.Save = function (oButton) {
            var activeRow = oButton.parentNode.parentNode.rowIndex;
            var tab = document.getElementById('itemsTable').rows[activeRow];

            // UPDATE header ARRAY WITH VALUES.
            for (i = 1; i < this.col.length; i++) {
                var td = tab.getElementsByTagName("td")[i];
                if (td.childNodes[0].getAttribute('type') == 'text' || td.childNodes[0].tagName == 'SELECT' || td.childNodes[0].getAttribute('type') == 'radio' || td.childNodes[0].getAttribute('type') == 'checkbox') {  // CHECK IF ELEMENT IS A TEXTBOX OR SELECT.
                    this.header[(activeRow - 1)][this.col[i]] = td.childNodes[0].value;      // SAVE THE VALUE.
                }
            }
            this.createTable();     // REFRESH THE TABLE.
        }
*/

        // CREATE NEW.
        this.CreateNew = function (oButton) {
            var activeRow = oButton.parentNode.parentNode.rowIndex;
            var tab = document.getElementById('itemsTable').rows[activeRow];
            var obj = {};

            // ADD NEW VALUE TO header ARRAY.
            for (i = 1; i < this.col.length; i++) {
                var td = tab.getElementsByTagName("td")[i];
                if (td.childNodes[0].tagName == 'SELECT' || td.childNodes[0].getAttribute('name') == 'design' || td.childNodes[0].getAttribute('type') == 'text') { // CHECK IF ELEMENT IS A TEXTBOX OR SELECT.
                    var txtVal = td.childNodes[0].value;
                    if ((itemList.selectedIndex == 1 && colorList.selectedIndex != 0) || (itemList.selectedIndex == 2) || (itemList.selectedIndex != 0 && sizeList.selectedIndex != 0 && colorList.selectedIndex != 0)) {
                        if (customtxt.value != '') { itemCost.textContent = "$"+(costArray[sizeList.selectedIndex]+7); totalCost.textContent = "$"+Math.round((total += (costArray[sizeList.selectedIndex]+7)/6)); }
                        else { itemCost.textContent = "$"+costArray[sizeList.selectedIndex]; totalCost.textContent = "$"+Math.round((total += costArray[sizeList.selectedIndex]/6)); }
                        costString.setAttribute('value', itemCost.textContent);
						totalString.setAttribute('value', totalCost.textContent);
                        obj[this.col[i]] = txtVal.trim();
                    }
                    else {
                        obj = '';
                        alert("All applicable fields are required!");
                        break;
                    }
                }
            }
            obj[this.col[0]] = this.header.length + 1;     // NEW ID.

            if (Object.keys(obj).length > 0) {      // CHECK IF OBJECT IS NOT EMPTY.
                this.header.push(obj);              // PUSH (ADD) DATA TO THE JSON ARRAY.
                this.createTable();                 // REFRESH THE TABLE.
				var customYes = document.createElement('input'); if (customtxt.value != '') { customYes.setAttribute('value', 'Yes'); } else { customYes.setAttribute('value', 'No'); }
				orderString.textContent = "\n" + "Item: " + itemList.options[itemList.selectedIndex].value + "\n" + "Size: " + sizeList.options[sizeList.selectedIndex].value + "\n" + "Color: " + colorList.options[colorList.selectedIndex].value + "\n" + "Design: " + designString.value + "\n" + "Customization: " + customYes.value + "\n" + "Custom Name: " + customtxt.value + "\n" + "Cost: " + costString.value + "\n";
				orderList.innerHTML += orderString.textContent;
				itemList.selectedIndex = 0;
				customtxt.value = '';
				itemList.click();
				sizeList.click();
            }
        }

    itemList.onclick = function() {
        sizeList.querySelectorAll('*').forEach(n => n.remove());
        colorList.querySelectorAll('*').forEach(n => n.remove());
        if (itemList.selectedIndex == 0) {
            sizeArray = ["-- select a size --", "No item selected"];
            colorArray = ["-- select a color --", "No item selected"];
			costArray = [0, 0];
        }
        if (itemList.selectedIndex == 1) {
            sizeArray = ["-- N/A --", "-- N/A --"];
            colorArray = ["-- select a color --", "Red", "Navy", "Royal", "Silver", "White", "Charcoal", "Black"];
			costArray = [0, 0];
        }
        if (itemList.selectedIndex == 2) {
            sizeArray = ["-- N/A --", "-- N/A --"];
            colorArray = ["-- N/A --", "-- N/A --"];
			costArray = [0, 0];
        }
        if (itemList.selectedIndex == 3) {
            sizeArray = ["-- select a size --", "-- Ladies Sizes --", "S", "M", "L", "XL", "XXL", "XXXL"];
            colorArray = ["-- select a color --", "Iris", "Surf", "Meteorite", "Wassabi", "Charcoal", "Navy", "Blossom", "Sage"];
			costArray = [0, 0, 20, 20, 20, 20, 21, 22];
        }
        if (itemList.selectedIndex == 4) {
            sizeArray = ["-- select a size --", "-- Youth Sizes --", "YS", "YM", "YL", "YXL", "-- Adult Sizes --", "S", "M", "L", "XL", "XXL", "XXXL"];
            colorArray = ["-- select a color --", "Oxford", "Heather Green", "Heather Red", "Teal", "Orange", "Purple"];
			costArray = [0, 0, 15, 15, 15, 15, 0, 16, 16, 16, 16, 17, 18];
        }
        if (itemList.selectedIndex == 5) {
            sizeArray = ["-- select a size --", "-- Youth Sizes --", "YS", "YM", "YL", "YXL"];
            colorArray = ["-- select a color --", "Red", "Royal", "Forest", "Maroon", "Navy", "Lt. Steel", "White"];
			costArray = [0, 0, 26, 26, 26, 26];
        }
        if (itemList.selectedIndex == 6) {
            sizeArray = ["-- select a size --", "-- Adult Sizes --", "S", "M", "L", "XL", "XXL", "XXXL"];
            colorArray = ["-- select a color --", "Army Brown", "Lt. Steel", "Kelly", "Bluebell", "Red Pepper Heather", "Charcoal Heather", "Orange", "White"];
			costArray = [0, 0, 27, 27, 27, 27, 28, 29];
        }
        if (itemList.selectedIndex == 7) {
            sizeArray = ["-- select a size --", "-- Youth Sizes --", "YS", "YM", "YL", "YXL"];
            colorArray = ["-- select a color --", "Forest", "Lt. Blue", "Royal", "Navy", "Steel", "Maroon", "White"];
			costArray = [0, 0, 31, 31, 31, 31];
        }
        if (itemList.selectedIndex == 8) {
            sizeArray = ["-- select a size --", "-- Adult Sizes --", "S", "M", "L", "XL", "XXL", "XXXL"];
            colorArray = ["-- select a color --", "Royal", "White", "Navy", "Forest", "Black"];
			costArray = [0, 0, 34, 34, 34, 34, 36, 37];
        }
        if (itemList.selectedIndex == 9) {
            sizeArray = ["-- select a size --", "-- Youth Sizes --", "YS", "YM", "YL"];
            colorArray = ["-- select a color --", "Deep Heather", "Heather Navy", "Red"];
			costArray = [0, 0, 0, 0, 0];
        }
        if (itemList.selectedIndex == 10) {
            sizeArray = ["-- select a size --", "-- Adult Sizes --", "XS", "S", "M", "L", "XL", "XXL"];
            colorArray = ["-- select a color --", "Red", "Grey Triblend", "Heather Forest", "Heather Navy", "Royal", "Cardinal Triblend"];
			costArray = [0, 0, 0, 0, 0, 0, 0, 0];
        }
        if (itemList.selectedIndex == 11) {
            sizeArray = ["-- select a size --", "-- Youth Sizes --", "YXS", "YS", "YM", "YL", "YXL", "-- Adult Sizes --", "XS", "S/M", "L/XL", "XXL"];
            colorArray = ["-- N/A --"];
			costArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        }
        if (itemList.selectedIndex == 12) {
            sizeArray = ["-- select a size --", "-- Youth Sizes --", "YS", "YM", "YL", "-- Adult Sizes --", "S", "M", "L", "XL", "XXL", "XXXL"];
            colorArray = ["-- select a color --", "Carnival", "Karma", "Festival", "Wild Spider", "Woodstock"];
			costArray = [0, 0, 20, 20, 20, 0, 21, 21, 21, 21, 22, 23];
        }
        if (itemList.selectedIndex == 13) {
            sizeArray = ["-- select a size --", "-- Youth Sizes --", "YS", "YM", "YL"];
            colorArray = ["-- select a color --", "Neon Rainbow", "Blue Mix", "Camo Swirl", "Spider Lime", "Multi Rainbow"];
			costArray = [0, 0, 39];
        }
        if (itemList.selectedIndex == 14) {
            sizeArray = ["-- select a size --", "-- Adult Sizes --", "S", "M", "L", "XL", "XXL", "XXXL"];
            colorArray = ["-- select a color --", "Spider Lime", "Blue Ocean", "Cotton Candy", "Eternity", "Minty Rainbow"];
			costArray = [0, 0, 40, 40, 40, 40, 44, 45];
        }
        if (itemList.selectedIndex == 15) {
            sizeArray = ["-- select a size --", "-- Youth Sizes --", "YS", "YM", "YL"];
            colorArray = ["-- select a color --", "Barbedos", "Saturn", "Flouswirl", "Neon Rainbow", "Floublue/Pink", "Minty Rainbow"];
			costArray = [0, 0, 0, 0, 0];
        }
        if (itemList.selectedIndex == 16) {
            sizeArray = ["-- select a size --", "-- Adult Sizes --", "S", "M", "L", "XL", "XXL", "XXXL"];
            colorArray = ["-- select a color --", "Blur Jerry", "Saturn", "Reactive Rainbow", "Black Spider", "Purple Spider", "Pink Spider"];
			costArray = [0, 0, 0, 0, 0, 0, 0, 0];
        }
        if (itemList.selectedIndex == 17) {
            sizeArray = ["-- select a size --", "-- Youth Sizes --", "YS", "YM", "YL", "-- Adult Sizes --", "S", "M", "L", "XL", "XXL"];
            colorArray = ["-- select a color --", "Purple Sparkle", "BW Stripes", "Pacific Surf", "Navy/Columbia Blue", "Red White Dot", "Blue Camo"];
			costArray = [0, 0, 27, 27, 27, 0, 28, 28, 28, 28, 30];
        }
        if (itemList.selectedIndex == 18) {
            sizeArray = ["-- N/A --", "-- N/A --"];
            colorArray = ["-- N/A --", "-- N/A --"];
			costArray = [0, 0];
        }
        itemCost.textContent = "$0";

        for (var s = 0; s < sizeArray.length; s++) {
            var sizeOption = document.createElement("option");
            sizeOption.setAttribute("value", sizeArray[s]);
            sizeOption.text = sizeArray[s];
            if (itemList.selectedIndex == 4) { if (s == 0 || s == 1 || s == 6) { sizeOption.disabled = true; } }
            else if (itemList.selectedIndex == 11) { if (s == 0 || s == 1 || s == 7) { sizeOption.disabled = true; } }
            else if (itemList.selectedIndex == 12) { if (s == 0 || s == 1 || s == 5) { sizeOption.disabled = true; } }
            else { if (s == 0 || s == 1) { sizeOption.disabled = true; } }
            sizeList.selectedIndex = 0;
            sizeList.appendChild(sizeOption);
        }
        for (var c = 0; c < colorArray.length; c++) {
            var colorOption = document.createElement("option");
            colorOption.setAttribute("value", colorArray[c]);
            colorOption.text = colorArray[c];
            if (itemList.selectedIndex == 0) { if (c == 0 || c == 1) { colorOption.disabled = true; } }
            else if (c == 0) { colorOption.disabled = true; }
            colorList.selectedIndex = 0;
            colorList.appendChild(colorOption);
        }
    }

    sizeList.onclick = function() {
        if (customtxt.value != '') { itemCost.textContent = "$"+(costArray[sizeList.selectedIndex]+7); }
        else { itemCost.textContent = "$"+costArray[sizeList.selectedIndex]; }
    }
}
itemTable.createTable();

function confirmPay() {
    document.getElementById("continuePay").style.display = "none";
    document.getElementById("confirmPay").style.display = "block";
}

function cancelPay() {
    document.getElementById("continuePay").style.display = "block";
    document.getElementById("confirmPay").style.display = "none";
}