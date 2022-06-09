var inputs = document.querySelectorAll('.form-check-input')
var answers = document.querySelectorAll('.answer')
var fees = document.querySelector("#fees")
var feesNew = document.querySelector("#feesNew")



function toggleElementDisplay(){
for (let i = 0; i < inputs.length; i++) {

    if(inputs[i].checked){
       document.querySelector(`.${inputs[i].value}`).style.display = "block"
    }else if(inputs[i].checked == false){
        document.querySelector(`.${inputs[i].value}`).style.display = ""
    }   
}
}

document.querySelector("#dateInput").addEventListener("input",function(e){
    const routerDate = e.target.value;
    const inputDate = new Date().toLocaleDateString()
    const date1 = new Date(routerDate)
    const date2 = new Date(inputDate)
    const diffTime = (date2 - date1);
    const diffMonths = Math.round(diffTime / (1000 * 60 * 60 * 24 * 30)); 
    
    
    if(diffMonths < 0){
        fees.innerHTML = "Please inter valid date"
    } else if(diffMonths <= 12){
        fees.innerHTML = `
        عدد الشهور : ${diffMonths}
        <br>
        مصاريف الألغاء : قيمة الراوتر بالكامل
        `
    }else if(diffMonths > 12 && diffMonths <= 24){
        fees.innerHTML = `
        عدد الشهور : ${diffMonths}
        <br>
        مصاريف الألغاء : 300 جنيه  
        `
    }else if(diffMonths > 24 && diffMonths <= 36){
        fees.innerHTML = `
        عدد الشهور : ${diffMonths}
        <br>
        مصاريف الألغاء : 200 جنيه  
        `
    }else if(diffMonths > 36 && diffMonths <= 48){
        fees.innerHTML = `
        عدد الشهور : ${diffMonths}
        <br>
        مصاريف الألغاء : 100 جنيه  
        `
    }else if(diffMonths > 48 && diffMonths <= 60){
        fees.innerHTML = `
        عدد الشهور : ${diffMonths}
        <br>
        مصاريف الألغاء : 50 جنيه  
        `
    }else if(diffMonths > 60){
        fees.innerHTML = `
        عدد الشهور : ${diffMonths}
        <br>
        مصاريف الألغاء : لا يوجد مصاريف الغاء   
        `
    }
})

document.querySelector("#dateInputNew").addEventListener("input",function(e){
    const routerDateNew = e.target.value;
    const inputDateNew = new Date().toLocaleDateString()
    const date1New = new Date(routerDateNew)
    const date2New = new Date(inputDateNew)
    const diffTimeNew = (date2New - date1New);
    const diffMonthsNew = Math.round(diffTimeNew / (1000 * 60 * 60 * 24 * 30)); 
    
    
    if(diffMonthsNew < 0){
        feesNew.innerHTML = "Please inter valid date"
    } else if(diffMonthsNew <= 12){
        feesNew.innerHTML = `
        عدد الشهور : ${diffMonthsNew}
        <br>
        مصاريف الألغاء : 750 جنيه  
        `
    }else if(diffMonthsNew > 12 && diffMonthsNew <= 24){
        feesNew.innerHTML = `
        عدد الشهور : ${diffMonthsNew}
        <br>
        مصاريف الألغاء : 600 جنيه  
        `
    }else if(diffMonthsNew > 24 && diffMonthsNew <= 36){
        feesNew.innerHTML = `
        عدد الشهور : ${diffMonthsNew}
        <br>
        مصاريف الألغاء : 500 جنيه  
        `
    }else if(diffMonthsNew > 36 && diffMonthsNew <= 48){
        feesNew.innerHTML = `
        عدد الشهور : ${diffMonthsNew}
        <br>
        مصاريف الألغاء : 400 جنيه  
        `
    }else if(diffMonthsNew > 48 && diffMonthsNew <= 60){
        feesNew.innerHTML = `
        عدد الشهور : ${diffMonthsNew}
        <br>
        مصاريف الألغاء : 200 جنيه  
        `
    }else if(diffMonthsNew > 60 && diffMonthsNew <= 75){
        feesNew.innerHTML = `
        عدد الشهور : ${diffMonthsNew}
        <br>
        مصاريف الألغاء : 50 جنيه  
        `
    }else if(diffMonthsNew > 75){
        feesNew.innerHTML = `
        عدد الشهور : ${diffMonthsNew}
        <br>
        مصاريف الألغاء : لا يوجد مصاريف الغاء   
        `
    }
})