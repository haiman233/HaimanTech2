function onUse(event) {
    const player = event.getPlayer();
    const chunk = player.getLocation().getChunk(); // 获取玩家当前所在区块
    const isSlimeChunk = chunk.isSlimeChunk(); // 检查当前区块是否为史莱姆区块
    const isForceLoaded = chunk.isForceLoaded();
    const isEntitiesLoaded = chunk.isEntitiesLoaded();
    const isLoaded = chunk.isLoaded();
    const getLoadLevel = chunk.getLoadLevel();
    const getInhabitedTime = chunk.getInhabitedTime();
    const x = chunk.getX();
    const z = chunk.getZ();
    const message = isSlimeChunk ? "是" : "否";
    const message2 = isForceLoaded ? "是" : "否";
    const message3 = isEntitiesLoaded ? "是" : "否";
    const message4 = isLoaded ? "是" : "否";
    const message5 = getLoadLevel;
    const message6 = getInhabitedTime;
    player.sendMessage(`您所处的区块为(${x},${z})`);
    player.sendMessage(`是否为史莱姆区块：${message}`);
    player.sendMessage(`是否为强加载区块：${message2}`);
    player.sendMessage(`是否能生成生物：${message3}`);
    player.sendMessage(`是否已加载：${message4}`);
    player.sendMessage(`区块加载等级：${message5}`);
    player.sendMessage(`此区块被玩家居住的时间：${message6}`);
}