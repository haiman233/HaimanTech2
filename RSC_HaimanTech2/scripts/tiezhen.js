// 当物品被右键时
function onUse(event) { 
    var player = event.getPlayer();

    var inv = player.getInventory();

    var itemInMainHand = inv.getItemInMainHand();

        // 打开铁砧界面
        var anvil = player.openAnvil(player.getLocation(), true);

        // 检查是否成功打开了铁砧界面
        if (anvil) {
            // 这里可以添加更多的逻辑，比如设置铁砧界面的标题等
        } else {
            // 如果无法打开铁砧界面，可以通知玩家
            player.sendMessage("无法打开铁砧界面。");
        }
    }
