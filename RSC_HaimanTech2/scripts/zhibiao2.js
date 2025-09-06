function onUse(event) {
    const player = event.getPlayer();
    const getName = player.getName(); // 检查当前区块是否为史莱姆区块
    const getEnchantmentSeed = player.getEnchantmentSeed();
    const getExpToLevel = player.getExpToLevel();
    const getPotentialBedLocation = player.getPotentialBedLocation();
    const getLastDeathLocation = player.getLastDeathLocation();
    const getSaturatedRegenRate = player.getSaturatedRegenRate();
    const getUnsaturatedRegenRate = player.getUnsaturatedRegenRate();
    const getStarvationRate = player.getStarvationRate();
    const message = getName;
    const message2 = getEnchantmentSeed;
    const message3 = getExpToLevel;
    const message4 = getPotentialBedLocation;
    const message5 = getLastDeathLocation;
    const message6 = getSaturatedRegenRate;
    const message7 = getUnsaturatedRegenRate;
    const message8 = getStarvationRate;
    player.sendMessage(`监测玩家：${message}`);
    player.sendMessage(`升级所需经验：${message3}`);
    player.sendMessage(`附魔种子：${message2}`);
    player.sendMessage(`床的位置：${message4}`);
    player.sendMessage(`死亡位置：${message5}`);
    player.sendMessage(`满饥饿值生命恢复速率：${message6}`);
    player.sendMessage(`半饥饿值生命恢复速率：${message7}`);
    player.sendMessage(`饥饿掉血速率：${message8}`);
}