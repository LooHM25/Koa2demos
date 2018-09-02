
function getData() {
    return 'zhangsan';
}
async function testAsync() {
    return 'Hello async';
}


async function test() {
    const v1 = await getData();
    const v2 = await testAsync();
    console.log(v1, v2);
}
test();