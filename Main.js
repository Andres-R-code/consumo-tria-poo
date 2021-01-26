import request from "./Request.js";
import UI from "./UI.js";
import {question_correctReset,question_correct} from "./UI.js";


const form = document.getElementById("container");
const form2 = document.getElementById("container-Questions");

        request.getCategories()
                .then((response)=> response.json())
                .then((data)=> UI.printCategories(data))

        form.addEventListener("submit",(event)=> {
        event.preventDefault();
        
        if (request.getQuestions()==1) {
                const form2 = document.getElementById("container-Questions");
                form2.innerHTML="";
                form2.innerHTML=`<div class="col-md-6" style="margin: auto;">
                                        <div class="alert alert-danger">
                                                <div class="alert-body">
                                                        You need to complete all the fields.
                                                </div>
                                        </div>
                                </div>`;
                } else {
                        request.getQuestions()
                                .then((response)=> response.json())
                                .then((data)=> UI.printQuestions(data))
                }
        });

        form2.addEventListener("submit",(event)=> {
        event.preventDefault();
        UI.printValidation();
        })