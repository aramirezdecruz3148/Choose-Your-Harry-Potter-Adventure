function scoreQuest(user, choice, quest) {
    user.injury += choice.injury;
    user.spells += choice.spells;
    user.complete[quest] = true;
    return user;
}

export default scoreQuest;