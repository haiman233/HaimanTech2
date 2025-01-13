// 当物品被右键时
function onUse(event) {
 
    var player = event.getPlayer();
    var inv = player.getInventory();
    var itemInMainHand = inv.getItemInMainHand();
    var offHandItem = inv.getItemInOffHand();

    if (offHandItem != null && SlimefunItem.getByItem(offHandItem) != null) {
        player.sendMessage("您必须使用主手查看且副手不能有粘液物品！");
        return;
    }
    if (itemInMainHand != null && itemInMainHand.getAmount() > 0) {
        // 将转换数量设为玩家主手中物品的数量  
        // var amount = itemInMainHand.getAmount();  

        // 将转换数量设为一个
        var amount = 1;

        // 将玩家主手中的物品数量设置为已有物品数量 - 1，即消耗了一个物品 
        itemInMainHand.setAmount(itemInMainHand.getAmount() - 1);

        // 运行op指令
        runOpCommand(player, "minecraft:seed");
    }
}
