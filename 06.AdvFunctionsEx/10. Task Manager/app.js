function solve() {

    let taskElement = document.getElementById('task');
    let descriptionElement = document.getElementById('description');
    let dateElement = document.getElementById('date');
    let addTaskButton = document.getElementById('add');

    let openSelctionElement = document.querySelector('.wrapper section:nth-of-type(2)');
    let inProgressSelctionElement = document.querySelector('.wrapper section:nth-of-type(3)');
    let finishSectionElement = document.querySelector('.wrapper section:nth-of-type(4)');

    addTaskButton.addEventListener('click', (e) => {
        e.preventDefault();

        let task = taskElement.value;
        let description = descriptionElement.value;
        let date = dateElement.value;

        if (!task || !description || !date) {
            return;
        }

        let openDivElement = openSelctionElement.querySelector('div:nth-of-type(2)');

        ///XSS vurnaribility:
        openDivElement.insertAdjacentHTML('beforeend', '<article>' +
                                                            `<h3>${task}</h3>` +
                                                            `<p>Description: ${description}</p>` +
                                                            `<p>Due Date: ${date}</p>` +
                                                            '<div class="flex">'+
                                                                '<button class="green">Start</button>' +
                                                                '<button class="red">Delete</button>' +
                                                            '</div>' +
                                                           '</article>');

        // let articleElement = document.createElement('article');

        // let h3Element = document.createElement('h3');
        // h3Element.textContent = task;

        // let pDescElement = document.createElement('p');
        // pDescElement.textContent = `Description: ${description}`;

        // let pDateElement = document.createElement('p');
        // pDateElement.textContent = `Due Date: ${date}`;

        // articleElement.appendChild(h3Element);
        // articleElement.appendChild(pDescElement);
        // articleElement.appendChild(pDateElement);
        // articleElement.insertAdjacentHTML('beforeend', '<div class="flex">' +
        //                                                     '<button class="green">Start</button>' +
        //                                                     '<button class="red">Delete</button>' +
        //                                                 '</div>');
        // openDivElement.appendChild(articleElement);
    });

    openSelctionElement.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            let currentArticle = e.target.parentNode.parentNode;

            if (e.target.className === 'green') {
                let inProgressDivElement = inProgressSelctionElement.querySelector('#in-progress');

                let currentTask = currentArticle.querySelector("h3").textContent;
                let currentDescription = currentArticle.querySelector("p:nth-of-type(1)").textContent;
                let currentDate = currentArticle.querySelector("p:nth-of-type(2)").textContent;

                ///XSS vurnaribility:
                inProgressDivElement.insertAdjacentHTML('beforeend', '<article>' +
                                                                        `<h3>${currentTask}</h3>` +
                                                                        `<p>${currentDescription}</p>` +
                                                                        `<p>${currentDate}</p>` +
                                                                        '<div class="flex">'+
                                                                            '<button class="red">Delete</button>' +
                                                                            '<button class="orange">Finish</button>' +
                                                                        '</div>' +
                                                                      '</article>');

                // let articleElement = document.createElement('article');

                // let h3Element = document.createElement('h3');
                // h3Element.textContent = currentTask;

                // let pDescElement = document.createElement('p');
                // pDescElement.textContent = currentDescription;

                // let pDateElement = document.createElement('p');
                // pDateElement.textContent = currentDate;

                // articleElement.appendChild(h3Element);
                // articleElement.appendChild(pDescElement);
                // articleElement.appendChild(pDateElement);
                // articleElement.insertAdjacentHTML('beforeend', '<div class="flex">' +
                //                                                     '<button class="red">Delete</button>' +
                //                                                     '<button class="orange">Finish</button>' +
                //                                                 '</div>');

                // inProgressDivElement.appendChild(articleElement);
            }

            currentArticle.remove();
        }
    });

    inProgressSelctionElement.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            let currentArticle = e.target.parentNode.parentNode;

            if (e.target.className === 'orange') {
                let finishDivElement = finishSectionElement.querySelector('div:nth-of-type(2)');

                let currentTask = currentArticle.querySelector("h3").textContent;
                let currentDescription = currentArticle.querySelector("p:nth-of-type(1)").textContent;
                let currentDate = currentArticle.querySelector("p:nth-of-type(2)").textContent;

                ///XSS vurnaribility:
                finishDivElement.insertAdjacentHTML('beforeend', '<article>' +
                                                                    `<h3>${currentTask}</h3>` +
                                                                    `<p>${currentDescription}</p>` +
                                                                    `<p>${currentDate}</p>` +
                                                                  '</article>');

                // let articleElement = document.createElement('article');

                // let h3Element = document.createElement('h3');
                // h3Element.textContent = currentTask;

                // let pDescElement = document.createElement('p');
                // pDescElement.textContent = currentDescription;

                // let pDateElement = document.createElement('p');
                // pDateElement.textContent = currentDate;

                // articleElement.appendChild(h3Element);
                // articleElement.appendChild(pDescElement);
                // articleElement.appendChild(pDateElement);

                // finishDivElement.appendChild(articleElement);
            }

            currentArticle.remove();
        }
    });

}