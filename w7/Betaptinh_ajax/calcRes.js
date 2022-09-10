exports.html = (x, y, opt, rs) => {
  return (
    `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <link rel="stylesheet" type="text/css" href="./stylesheets/style.css">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  </head>
  
  <body>
      <div class="container">
          <div class="row py-2 ">
              <div class="col-md-3 mx-auto">
                  <div class="card ">
                      <div class="card-header">Calculator</div>
                      <div class="card-body">
                          <form action="/calc" method="post">
  
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">X</span>
                                <input type="number" name="x" class="form-control" value="${x}">
                            </div>

                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">Y</span>
                                <input type="number" name="y" class="form-control" value="${y}">
                            </div>
  
                              <div class="input-group mb-3">
                                  <label class="input-group-text" for="opt">Operator</label>
                                  <select class="form-select" name="opt" id="opt">
                                      <option ` +
    (opt == "+" ? "selected" : "") +
    ` value="+">+</option>
                                      <option ` +
    (opt == "-" ? "selected" : "") +
    ` value="-">-</option>
                                      <option ` +
    (opt == "*" ? "selected" : "") +
    ` value="*">*</option>
                                      <option ` +
    (opt == "/" ? "selected" : "") +
    ` value="/">/</option>
                                  </select>
                              </div>
                              <div class="form-group text-end">
                                <button type="submit" class="btn btn-primary">Submit</button>
                              </div>
                              <div class="form-group text-center" style="font-size: 2.5rem;">
                                <span class="badge rounded-pill bg-info">${rs}</span>
                              </div>
                          </form>
                      </div>
                  </div>
                  <div>
                  </div>
              </div>
  </body>
  
  </html>`
  );
};
