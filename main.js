document.addEventListener("DOMContentLoaded",()=>{
    const loginForm = document.querySelector("#login");
    const CreateAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkcreateAccount").addEventListener("click", e =>{e.preventDefault();
        loginForm.classList.add("form__hidden");
        CreateAccountForm.classList.remove("form__hidden");
    });

    document.querySelector("#linklogin").addEventListener("click", e =>{e.preventDefault();
        loginForm.classList.remove("form__hidden");
        CreateAccountForm.classList.add("form__hidden");
    });
});