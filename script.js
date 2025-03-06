function submitForm() {
    var form = document.getElementById("evaluationForm");
    var formData = {
      phone: form.phone.value,
      rating: form.rating.value,
      suggestion: form.suggestion.value
    };
  
    // رابط Google Apps Script المنشور (استبدله بالرابط الخاص بك)
    var scriptURL = "https://script.google.com/macros/s/AKfycbzc6NvHOwELDcIk4Ix13kKm4iRES0TKjRhFCF0BBbl-iH97dmAJyn8RaVCZ1jqy_jY/exec";
  
    // إرسال البيانات باستخدام fetch
    fetch(scriptURL, {
      method: "POST",
      mode: "no-cors", // يمكنك استخدام "cors" إذا قمت بتكوين CORS في Google Apps Script
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      // في حالة no-cors لن تستطيع قراءة الاستجابة بشكل كامل، لذا يمكن عرض رسالة تأكيد
      document.getElementById("result").innerText = "تم إرسال البيانات بنجاح!";
      form.reset();
    })
    .catch(error => {
      console.error("Error!", error.message);
      document.getElementById("result").innerText = "حدث خطأ أثناء الإرسال.";
    });
  }
  