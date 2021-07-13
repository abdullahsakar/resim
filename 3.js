const resim=document.getElementsByTagName(".img")[0];

const geriDugmesi=document.getElementsById(".geri")

const ileriDugmesi=document.getElementsById(".ileri")

const resimNumarasiEl=document.getElementsByTagName(".span")[0];

console.log(resimEl,ileriEl,geriEl,resimNumarasiEl);

let resimNumarasi = 0;

const rezimDizisi =[
"https://images.unsplash.com/photo-1516091877740-fde016699f2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80"
,"https://images.unsplash.com/photo-1541332246502-2e99eaa96cc1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
,"https://images.unsplash.com/photo-1576402428860-746188f839d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
"https://images.unsplash.com/photo-1541292426587-b6ca8230532b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80",
"https://images.unsplash.com/photo-1579264670959-286d7b06f1ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1894&q=80",
"https://images.unsplash.com/photo-1543306983-a562d8739781?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1875&q=80"

]
 const resimDizisi = [
 ];
console.log(resimDizisi.length);

geriDugmesi.addEventListener("click", () => { resimNumarasi--;
     if (resimNumarasi < 0) resimNumarasi = resimNumarasi +6;
    resimNumarasiEl.innerHTML = resimNumarasi +1;
    resimEl.src = resimDizisi[resimNumarasi];
    console.log(resimNumarasi);
});

ileriDugmesi.addEventListener("click", () => { resimNumarasi++;
     if (resimNumarasi < 0) resimNumarasi = resimNumarasi % 6;
    resimNumarasiEl.innerHTML = resimNumarasi +1;
    resimEl.src = resimDizisi[resimNumarasi];
    console.log(resimNumarasi);
});