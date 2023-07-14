let slide_index = -1
let received_answers = []

const paragraph_contents = ["This course will show you how to prove the Pythagorean Theorem from this geometric diagram in the Zhoubi Suanjing (周髀算經) <br><br> Firstly, what is the total area of the 4 outer triangles?",
                            "Next, what is the area of the interior square?",
                            "Finally, how does this prove the Pythagorean Theorem?"]
const correct_answers = ["b","a","c"]
const answer_options = [["16","24","32"],["25","30","35"],["(a+b)² + 4ab / 2 = c²","(a+b)² + c² = 4ab / 2","(a+b)² - 4ab / 2 = c²"]]
const num_questions = correct_answers.length

const paragraph_content = document.getElementById("paragraph_content")
const answer_form = document.getElementById("answer_form");
const answer_form_header = document.getElementById("answer_form_header");
const message = document.getElementById("message")
const option1 = document.getElementById("option1")
const option2 = document.getElementById("option2")
const option3 = document.getElementById("option3")

const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")

const submit_btn = document.getElementById("submit_btn")
const next_btn = document.getElementById("next_btn")

function submit_answer() {
    answer = answer_form["options_name"].value
    received_answers.push(answer)

    if (answer === correct_answers[slide_index]) {
        message.innerHTML="&#127881; Correct! "
    }
    else {
        message.innerHTML="&#128270; Incorrect"
    }

    // edit buttons
    for (let i=0;i<3;i++) {
        btn = [btn1,btn2,btn3][i]
        if (btn.value === correct_answers[slide_index]) {
            btn.setAttribute("checked","checked")
        }
        else {
            btn.setAttribute("disabled","disabled")
        }
    }

    submit_btn.setAttribute("disabled","disabled")

}

function show_explanation() {
    alert("Explanation")
}

function next_slide() {
    if (slide_index+2 === num_questions) {
        next_btn.innerHTML = "Finish Course"
    }
    if (slide_index+1 >= num_questions) {
        home.style.display = "block"
        exit_course()
    }
    slide_index++
    paragraph_content.innerHTML=paragraph_contents[slide_index]
    answer_form_header.innerHTML="Question " + (slide_index + 1) + " of " + num_questions
    option1.innerHTML=answer_options[slide_index][0]
    option2.innerHTML=answer_options[slide_index][1]
    option3.innerHTML=answer_options[slide_index][2]

    // message.style.display="none"
    message.innerHTML=""

    for (let i=0;i<3;i++) {
        btn = [btn1,btn2,btn3][i]
        btn.removeAttribute("disabled")
        btn.removeAttribute("checked")
    }
    submit_btn.removeAttribute("disabled")

}

next_slide()