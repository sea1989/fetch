
//Создаем и отсылаем новый запрос через фетч
fetch("https://swapi.dev/api/people")
    .then(
        function (response) {
            //анализируем HTTP-статус ответа
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                return;
            }

            // если ответ 200 переводим данные с сервера в тип объект и отрисовываем через ф-цию addElement
            response.json().then(function (data) {
                data.results.forEach(addElement);
            });
        }
    )
    //если нет ответа выводим ошибку
    .catch(function (err) {
        console.log('Fetch Error :-S', err);
    });

//функция для создания элементов
function addElement(data) {

    // Создаём новый элемент

    var newTR = document.createElement("tr");

    // и добавляем в него немного контента

    newTR.innerHTML = `<td>${data.name}</td><td>${data.mass}</td><td>${data.height}</td>`;

    //находим элемент куда будем добавлять

    tableElement = document.getElementById("table");

    // Добавляем только что созданный элемент в дерево DOM

    tableElement.append(newTR);
}