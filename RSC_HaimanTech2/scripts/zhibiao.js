function onUse(event) {
    const player = event.getPlayer();
    const getName = player.getName(); // 检查当前区块是否为史莱姆区块
    const getExhaustion = player.getExhaustion();
    const getSaturation = player.getSaturation();
    const getFoodLevel = player.getFoodLevel();
    const getFreezeTicks = player.getFreezeTicks();
    const getMaximumAir = player.getMaximumAir();
    const getRemainingAir = player.getRemainingAir();
    const getAbsorptionAmount = player.getAbsorptionAmount();
    const getHealth = player.getHealth();
    const message = getName;
    const message2 = getFoodLevel;
    const message3 = getSaturation;
    const message4 = getExhaustion;
    const message5 = getMaximumAir;
    const message6 = getRemainingAir;
    const message7 = getFreezeTicks;
    const message8 = getAbsorptionAmount;
    const message9 = getHealth;

    player.sendMessage(`监测玩家：${message}`);
    player.sendMessage(`生命值：${message9}`);
    player.sendMessage(`饥饿值：${message2}`);
    player.sendMessage(`饱和度：${message3}`);
    player.sendMessage(`消耗值：${message4}`);
    player.sendMessage(`最大氧气值：${message5}`);
    player.sendMessage(`剩余氧气值：${message6}`);
    player.sendMessage(`伤害吸收量：${message8}`);
    player.sendMessage(`冰冻剩余时间(刻)：${message7}`);
}