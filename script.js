function inner_text(id) {
  const click_to_add = document.getElementById(id).innerText;
  const int = parseInt(click_to_add);
  return int;
}
function inner_text_class(clus) {
  const click_to_add = document.getElementsByClassName(clus).innerText;
  return click_to_add;
}
const classes = document.getElementsByClassName("fa-heart");
for (const single of classes) {
  single.addEventListener("click", function () {
    const total = inner_text("heart") + 1;
    document.getElementById("heart").innerText = total;
    console.log(total);
  });
}
const coping = document.getElementsByClassName("copying");
for (const single of coping) {
  single.addEventListener("click", function () {
    const num = this.closest(".card");
    const text = num.querySelector(".calling");
    const inner = text.innerText;
    navigator.clipboard.writeText(inner);
    alert(`✅সংখ্যাটি কপি করা হয়েছে : ${inner}`);

    const total = inner_text("coppy") + 1;
    document.getElementById("coppy").innerText = total;
  });
}

const calls = document.getElementsByClassName("call-btn");
for (const single of calls) {
  single.addEventListener("click", function () {
    const parent = this.closest(".card");
    const text = parent.querySelector(".nameing").innerText;
    const number = parent.querySelector(".calling").innerText;
    const heading = parent.querySelector(".heading").innerText;
    const nomber = parseInt(number);

    console.log("called");
    if (inner_text("call-bal") > 19) {
      alert(`📞 Calling ${text} ${nomber}`);
      const calling_bal = inner_text("call-bal") - 20;
      document.getElementById("call-bal").innerText = calling_bal;
    } else {
      alert(`পর্যাপ্ত কয়েন নেই 😔 কল করতে কমপক্ষে ২০ কয়েন লাগবে।`);
      return;
    }
    const newnode = document.getElementById("new-node");
    const div = document.createElement("div");
    div.innerHTML = ` <div
                class="flex p-3 rounded-xl justify-between items-center bg-[#FAFAFA] mb-2"
              >
                <div class="font-[400] madurai text-[11px] sm:text-[15px]">
                  <p class="text-[#111111]">${heading}</p>
                  <p class="text-[#5C5C5C]">${nomber}</p>
                </div>
                <p
                  class="font-[400] madurai text-[11px] sm:text-[16px] text-[#111111]"
                >
                  ${new Date().toLocaleTimeString()}
                </p>
              </div>`;

    newnode.appendChild(div);
    document.getElementById("clear").addEventListener("click", function () {
      document.getElementById("new-node").innerHTML = "";
    });
  });
}