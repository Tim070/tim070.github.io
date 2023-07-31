class GunType{
    name;
    bulletSpeed;
    bulletSize;
    bulletCount;
    bulletDamage;
    bulletSpread;
    clipSize;
    reloadCooldown;
    fireRate;
    burst;

    constructor(name, bulletSpeed, bulletSize, bulletCount, bulletDamage, bulletSpread, clipSize, reloadCooldown, fireRate, burst)
    {
        this.name = name;
        this.bulletSpeed = bulletSpeed;
        this.bulletSize = bulletSize;
        this.bulletCount = bulletCount;
        this.bulletDamage = bulletDamage;
        this.bulletSpread = bulletSpread;
        this.clipSize = clipSize;
        this.reloadCooldown = reloadCooldown;
        this.fireRate = fireRate;
        this.burst = burst;
    }
}

class Guns_handler {
    gunArray;

    constructor(){
        const pistol = new GunType("pistol",0.5, 0.09, 1, 0.5, 0.02, 8, 1.5, 0.01, 1)
        const shotgun = new GunType("shotgun",0.5, 0.08, 6, 0.2, 0.04, 2, 1, 0.5, 1 )
        const smg = new GunType("smg", 0.2, 0.05, 1, 0.2, 0.05, 45, 2.5, 0.1, 1)
        const ar = new GunType("ar", 0.7, 0.09, 1, 0.5, 0.01, 14, 2.0, 0.75, 3)
        const bounce = new GunType("bounce", 0.1, 0.50, 1, 2.0, 0, 4, 5, 1.0, 1)
        this.gunArray = [pistol, shotgun, smg, ar, bounce]
    }

    getGun(index){
        switch (index){
            case 0:
                return this.gunArray[0];
            case 1:
                return this.gunArray[1];
            case 2:
                return this.gunArray[2];
            case 3:
                return this.gunArray[3];
            case 4:
                return this.gunArray[4];
            default:
                return this.gunArray[0];
        }
    }
}