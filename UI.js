let question_correctReset = [];
let question_correct= [];

export default class UI {
    static printCategories(categories) {
        const categorie = document.getElementById("categories");
        categories.trivia_categories.forEach(element => {
            categorie.innerHTML+=`<option value="${element.id}">${element.name}</option>`;
        });
    }
    static printQuestions (questions) {
        for (let i=0; i<questions.results.length; i++) {
            question_correctReset.push(questions.results[i].correct_answer);
        }
        question_correct=[];
        question_correct.push(...question_correctReset);
        question_correctReset=[];
        const button = document.createElement("button");
        const selectT = document.getElementById("types").value;
        button.textContent="Enviar respuestas";
        button.classList.add("btn", "btn-primary","button-add");
        const container = document.getElementById("container-Questions");
        container.innerHTML="";
                if (questions.response_code==0) {
                    if (selectT==="multiple") {
                        for (let i=0; i<questions.results.length; i++) {
                            let copy=[];
                            copy.push(...questions.results[i].incorrect_answers);
                            let dato = Math.round(Math.random()*3);
                            copy.splice(dato,0,questions.results[i].correct_answer);
            
            container.innerHTML+=`<div class="question2 col-md-5 mt-4" style="margin: auto; margin-top: 30px; height: 200px">
                                        <div class="card h-100">
                                            <div class="card-body">
                                                ${questions.results[i].question}
                                                    <br>
                                                        <br>
                                                            <label style="color: blue;" for="select${i}" class="form-label">Choose your answer</label>
                                                                <select id="select${i}" class="form-control">
                                                                    <option id="${copy[0]}" value="${copy[0]}">${copy[0]}</option>
                                                                    <option id="${copy[1]}" value="${copy[1]}">${copy[1]}</option>
                                                                    <option id="${copy[2]}" value="${copy[2]}">${copy[2]}</option>
                                                                    <option id="${copy[3]}" value="${copy[3]}">${copy[3]}</option>
                                                                </select>
                                            </div>
                                        </div>
                                    </div>`;

                                }
                                container.lastElementChild.innerHTML+=`<button id="buttonC" class="btn btn-primary button-add form-check">Submit responses</button>`;
                            } else {
                                let booleano=["False","True"];
                                for (let i=0; i<questions.results.length; i++) {
                                    container.innerHTML+=`<div class="question2 col-md-5 mt-4" style="margin: auto; margin-top: 30px; height: 200px">
                                                                <div class="card h-100">
                                                                    <div class="card-body">
                                                                        ${questions.results[i].question}
                                                                            <br>
                                                                                <br>
                                                                                    <label style="color: blue;" for="select${i}" class="form-label">Select te correct question</label>
                                                                                        <select id="select${i}" class="form-control">
                                                                                            <option id="${booleano[0]}" value="${booleano[0]}">${booleano[0]}</option>
                                                                                            <option id="${booleano[1]}" value="${booleano[1]}">${booleano[1]}</option>
                                                                                        </select>
                                                                    </div>
                
                                                                </div>
                                                            </div>`;

                                    }
                                    container.lastElementChild.innerHTML+=`<button id="buttonC" class="btn btn-primary button-add form-check">Submit responses</button>`;
                        }
            } else {    
                                container.innerHTML+=`<div class="col-md-6" style="margin: auto;">
                                                                <div class="alert alert-info">
                                                                    <div class="alert-body">
                                                                    You have to choose fewer questions for this category
                                                                    </div>
                                                                </div>
                                                    </div>`;
                }
        }
        static printValidation () {
            const selec = document.getElementById("types").value;
        const form2 = document.getElementById("container-Questions");
        let cont=0;

                if (selec=="boolean") {
                        for (let i = 0; i<question_correct.length; i++) {
                                if (document.getElementById(`select${i}`).value===question_correct[i]) {
                                        cont++;
                                }
                        }
        } else {
                for (let i = 0; i<question_correct.length; i++) {
                        if (document.getElementById(`select${i}`).value===question_correct[i]) {
                                cont++;
                        }
                }
        }
        form2.innerHTML="";
        form2.innerHTML=`<div class="col-md-6" style="margin: auto;">
                                <div class="alert alert-warning">
                                        <div class="alert-body">
                                                You got fine ${cont} answers out of ${question_correct.length}.
                                        </div>
                                </div>
                        </div>`;
        }
    }
    
    export {question_correctReset, question_correct};