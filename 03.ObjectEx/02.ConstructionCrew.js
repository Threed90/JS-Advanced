function solve(obj) {
    if (obj.dizziness) {
        obj.levelOfHydrated += 0.1 * obj.weight * obj.experience;

        if (obj.levelOfHydrated) {
            obj.dizziness = false;
        }
    }


    return obj;
}

solve({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
  );