export function helloByVietnamese() { // phải export ra thì thằng khác mới dùng được. Cứ có khi nào có từ khóa này thì cả file js sẽ được mặc định là module
    console.log(`Xin chao. Ban co khoe khong?`);
}

export function helloByJapanese() { // phải export ra thì thằng khác mới dùng được. Cứ có khi nào có từ khóa này thì cả file js sẽ được mặc định là module
    console.log(`Ko ni chi wa`);
}

function helloByTailand() {
    console.log(`Sa qua di khap`);
}

function helloByCambodia() {
    console.log(`Cambudia here`);
}

function helloByLaos() {
    console.log(`Lao here`);
}

export let a = 10;