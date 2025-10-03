window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        if (window.scrollY > 50) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      });

      const change = function () {};
      const change1 = function () {
        document.querySelector("#heading").innerHTML = "UI /UX Designer";
      };
      const change2 = function () {
        document.querySelector("#heading").innerHTML = "Full Stack Devloper";
      };

      // setTimeout(change, 10000);

      setTimeout(change1, 10000);
      setTimeout(change2, 5000);

      