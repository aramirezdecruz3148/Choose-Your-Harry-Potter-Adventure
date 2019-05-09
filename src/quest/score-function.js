function scoreQuest(user, choice, quest) {
    user.injury += choice.injury;
    user.spell += choice.spell;
    user.completed[quest.id] = true;
    return user;
}

export default scoreQuest;