function createCard(img_src,title,content,learning_stats) {
    const card =    
    `
    <div class="col s12 m4">
        <div class="card my_width">
            <div class="card-image">
                <img class="my_height" onclick="enter_course()" src="images/${img_src}.png">
                <a class="activator btn-floating halfway-fab waves-effect waves-light red fade"><i class="material-icons">info_outline</i></a>
            </div>
        <div class="my_padding red white-text">
            <h6 onclick="enter_course()" style='font-weight: bold;'>${title}</h6>
        </div>
        <div class="my_padding red darken-3 white-text">
            <p>${content}</p>
        </div>

        <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">Learning Stats<i class="material-icons right">&#10060;</i></span>
            <p>Accuracy: ${learning_stats[0]}%</p>
            <p>Time: ${learning_stats[1]}s</p>
            <p>Proficiency: ${learning_stats[2]}%</p>
      </div>
    </div>
    </div>

    `;
    return card

}

function proficiency(accuracy,time) {
    return Math.round(accuracy * (.95 ** (Math.max(0,time-30)/60)) * 1000) / 1000    
}

function enter_course() {
    course_cards.style.display = "none"
    for (i=0;i<3;i++) {
        page_headers[i].style.display = "none"
    }
    course.style.display = "block"
}

const course_imgs = ["py2","ms","yh2"]
const course_titles = ["Pythagorean Theorem","Magic Square (mockup)","Yang Hui's Triangle (mockup)"]
const course_descriptions = ["Find a geometric proof for the Pythagorean Theorem",
                             "Discover the beautiful patterns of the Magic Square",
                             "Learn to find patterns in Yang Hui's Triangle",]
const learning_stats = [[95,55],[100,20],[55,95]] // [acc, time, prof]

const cd = document.getElementById("cardDisplay")
const course_cards = document.getElementById("course_cards")
const page_headers = document.getElementsByClassName("page_header")
const course = document.getElementById("course")

for (_row=0;_row<5;_row++) {
    // add proficiencies to learning_stats
    for (i=0;i<learning_stats.length;i++) {
        course_proficiency = proficiency(learning_stats[i][0],learning_stats[i][1])
        learning_stats[i].push(course_proficiency)
    }
    
    for (i=0;i<course_imgs.length;i++) {
        new_card_div = document.createElement("div")
        new_card_div.innerHTML = createCard(course_imgs[i],course_titles[i],course_descriptions[i],learning_stats[i]);
        cd.appendChild(new_card_div)
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, options);
  });

// enter_course()