(function () {

  window.LabelDesigner = {
    init(product) {
      window.__PRODUCT__ = product;
    }
  };

  document.addEventListener("click", function (e) {
    if (e.target.id === "openLabelDesigner") {
      openDesigner();
    }
  });

  window.openDesigner = function () {
    const container = document.getElementById("labelDesignerContainer");
    container.style.display = "block";
    document.body.style.overflow = "hidden";
  };

  window.closeDesigner = function () {
    const container = document.getElementById("labelDesignerContainer");
    container.style.display = "none";
    document.body.style.overflow = "";
  };

})();
