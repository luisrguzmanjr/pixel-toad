enum ActionKind {
    WalkingLeft,
    WalkingRight,
    WalkingLeftUp,
    WalkingRightUp,
    Climbing,
    Jumping,
    FlyingLeft,
    FlyingRight,
    Walking,
    Idle
}
namespace SpriteKind {
    export const Star = SpriteKind.create()
    export const Gem = SpriteKind.create()
    export const GoldMushroom = SpriteKind.create()
    export const Ninji = SpriteKind.create()
    export const ShyGuy = SpriteKind.create()
    export const Albatoss = SpriteKind.create()
    export const StatusGem = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.GoldMushroom, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(-1)
    info.showScore(false)
music.baDing.play()
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile3, function (sprite, location) {
    sprite.vx = 0
    sprite.vy = 0
    sprite.vy = -7 * pixelsToMeters
    sprite.y += -5
})
function createEnemiesFlyingRight () {
    flyRight = animation.createAnimation(ActionKind.FlyingRight, 100)
    flyRight.addAnimationFrame(img`
        .fff...........................
        .ffffff.............ffff.......
        ...fffffff...........f22f......
        ..fffffff2ff........f2222f.....
        ...fffffff22f........f2222f....
        ......ffffff2f......f2ff22f....
        .....ffffffff2f....f22f2fff....
        .......fffffff2f..f222f2222f...
        .........ffffff2ff222f2ff222f..
        ...........fffff222ff22f1f22f..
        ............2ffff222222f11ff...
        .........222ffffff2fff2222fff..
        ........2fffffffffff..ff2fffff.
        .........ff.fffffff.....fffffff
        .............ff.f...........fff
        ............fffff...........ff.
        `)
    flyRight.addAnimationFrame(img`
        ....f..........................
        ..ff.f..............2f.ff......
        ...ffff..............2222f.....
        ..fffffff............2ff22f....
        ...fffffffff........f2f2fff....
        ...fffffff22fff...ff22f2222f...
        .....fffffff222fff222f2ff222f..
        .......fffffff22222ff22f1f22f..
        ...........ffff22222222f11ff...
        .........222fffff22fff2222fff..
        ........2fffffffffff..ff2fffff.
        .........ff.fffffff.....fffffff
        .............ff.f...........fff
        ............fffff...........ff.
        ...............................
        ...............................
        `)
    flyRight.addAnimationFrame(img`
        ......................ff.......
        ......................f2fff....
        ............ffff......f2222f...
        ..........ff2222fff..f2ff222f..
        ........ff222222222ff22f1f22f..
        ......ff222222222222222f11ff...
        ....ff2222222ffff22fff2222fff..
        ..ff22222fffffffffffffff2fffff.
        ff2222fffff.fffffff..ffffffffff
        .fffff...ff..ff.f......ff22ffff
        ............fffff........ff.ff.
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        `)
    flyRight.addAnimationFrame(img`
        ......................ff.......
        ......................f2fff....
        .............fff......f2222f...
        ...........ff222fff..f2ff222f..
        .........ff22222222ff22f1f22f..
        ........f22222222222222f11ff...
        .......f2222222ff22fff2222fff..
        ......f2222222fffffff2ff2fffff.
        ....ff2222222ffffffff222fffffff
        ...f22f22f222ff.f.fffff2f..ffff
        ....ff22f222fffff..fffff2ff.ff.
        ...f222f22ff.........ffff22f...
        ....ff.fff............ff.fff...
        ...............................
        ...............................
        ...............................
        `)
    flyRight.addAnimationFrame(img`
        ......................ff.......
        ......................f2fff....
        .............fff......f2222f...
        ...........ff222fff..f2ff222f..
        .........ff22222222ff22f1f22f..
        ........f22222222222222f11ff...
        .......f2222222ff22fff2222fff..
        ......f2222222fffffff2ff2fffff.
        ......f2222222ffffffff2ffffffff
        .....f2222222ff.fffffff2f..ffff
        .....f2f22222ffff.fffff2f...ff.
        ......f222222f.....fffff2f.....
        ......f22f22f......ffffff2f....
        ......f2ff22f.......fffffff....
        ......ff..f2f.........ff.fff...
        ...............................
        `)
    flyRight.addAnimationFrame(img`
        ......................ff.......
        ......................f2fff....
        .............ffff.....f2222f...
        ...........ff2222ff..f2ff222f..
        ..........f22222222ff22f1f22f..
        .........f2222222222222f11ff...
        .........f22222ff22fff2222fff..
        ........f222222ffffff2ff2fffff.
        ........f222222fffffff2ffffffff
        ........f22222ffffffff2f...ffff
        .......f222222fff.ffff2f....ff.
        .......f222222f...fffff2f......
        .......f2f2222f....ffff2f......
        ........ff22f22f...fffff2f.....
        ..........f2f22f...f.fff2f.....
        ...........f.fff.....f.fff.....
        `)
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile22, function (sprite, location) {
    if (playerFacingRight) {
        sprite.vx += 1
        sprite.y += -1.5
    } else {
        sprite.vx += -1
        sprite.y += -1.5
    }
    if (scene.tileHitFrom(player, CollisionDirection.Bottom) == 1) {
        sprite.vx = 0
        sprite.vy = 0
    }
})
scene.onOverlapTile(SpriteKind.ShyGuy, tiles.util.arrow10, function (sprite, location) {
    sprite.ay = -1 * gravity
    if (sprite.vx > 0) {
        animation.setAction(sprite, ActionKind.WalkingRightUp)
    } else {
        animation.setAction(sprite, ActionKind.WalkingLeftUp)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ShyGuy, function (sprite, otherSprite) {
    overlapEnemy(sprite, otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Gem, function (sprite, otherSprite) {
    info.changeScoreBy(-1)
    info.showScore(false)
music.baDing.play()
    otherSprite.destroy()
    if (ctrGem == 1) {
        ctrGem += 1
        statusGem.setImage(smallGem)
    } else if (ctrGem == 2) {
        ctrGem += 1
        statusGem1.setImage(smallGem)
    } else {
        ctrGem += 1
        statusGem2.setImage(smallGem)
    }
})
function setStatusGems () {
    ctrGem = 1
    bigGem = img`
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . 8 8 8 8 9 9 9 1 1 1 . . . 
        . . 8 8 8 8 9 9 9 9 1 1 1 1 . . 
        . 8 8 8 8 8 8 9 9 1 1 1 1 1 1 . 
        8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 1 
        8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 1 
        9 9 9 9 9 f 9 9 9 9 f 9 9 9 9 9 
        9 9 9 9 9 f 9 9 1 1 f 1 1 1 1 1 
        9 9 9 9 9 f 9 9 1 1 f 1 1 1 1 1 
        . 9 9 9 9 9 9 9 1 1 1 1 1 1 1 . 
        . . 9 9 9 9 9 9 1 1 1 1 1 1 . . 
        . . . 9 9 9 9 9 1 1 1 1 1 . . . 
        . . . . 9 9 9 9 1 1 1 1 . . . . 
        . . . . . 9 9 9 1 1 1 . . . . . 
        . . . . . . 9 9 1 1 . . . . . . 
        . . . . . . . 9 1 . . . . . . . 
        `
    smallGem = scaling.scaleHalfX(bigGem)
bigStatusGem = img`
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 . . . . . . . . 1 . . . 
        . . 1 . . . . . . . . . . 1 . . 
        . 1 . . . . . . . . . . . . 1 . 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        . 1 . . . . . . . . . . . . 1 . 
        . . 1 . . . . . . . . . . 1 . . 
        . . . 1 . . . . . . . . 1 . . . 
        . . . . 1 . . . . . . 1 . . . . 
        . . . . . 1 . . . . 1 . . . . . 
        . . . . . . 1 . . 1 . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        `
    smallStatusGem = scaling.scaleHalfX(bigStatusGem)
statusGem = sprites.create(smallStatusGem, SpriteKind.StatusGem)
    statusGem1 = sprites.create(smallStatusGem, SpriteKind.StatusGem)
    statusGem2 = sprites.create(smallStatusGem, SpriteKind.StatusGem)
    statusGem.setFlag(SpriteFlag.RelativeToCamera, true)
    statusGem.setPosition(135, 4)
    statusGem1.setFlag(SpriteFlag.RelativeToCamera, true)
    statusGem1.setPosition(145, 4)
    statusGem2.setFlag(SpriteFlag.RelativeToCamera, true)
    statusGem2.setPosition(155, 4)
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile23, function (sprite, location) {
    if (playerFacingRight) {
        sprite.vx += 1
        sprite.y += -1.5
    } else {
        sprite.vx += -1
        sprite.y += -1.5
    }
    if (scene.tileHitFrom(player, CollisionDirection.Bottom) == 1) {
        sprite.vx = 0
        sprite.vy = 0
    }
})
function setPlayer () {
    pixelToad = img`
        .....fffffff....
        ...ff11222f555f.
        ..f211112255555.
        .f2211112255555f
        .f2221122f55555f
        f221222ff4f555ff
        f2111ff444ff121f
        f211f4444f11221f
        f2ff444ff222221f
        ff4444f2ffffff2f
        ff44ffffdfdfdff.
        .fff2fdddfdfdff.
        .effffdddddddf..
        eee4444dddfdf...
        ee44dd444222df..
        ee4ddd4442224df.
        ee4444441121fdf.
        eeeff111111ff...
        ....f222222f....
        `
    playerFacingRight = true
    isClimbing = false
    inFrontofLadder = false
    atTopOfLadder = false
    isFlippedUp = false
    for (let value of tiles.getTilesByType(tiles.util.object1)) {
        player = sprites.create(pixelToad, SpriteKind.Player)
        tiles.placeOnTile(player, value)
        tiles.setTileAt(value, myTiles.transparency16)
        player.setFlag(SpriteFlag.StayInScreen, true)
        player.setFlag(SpriteFlag.ShowPhysics, false)
        scene.cameraFollowSprite(player)
        controller.moveSprite(player, 100, 0)
        player.ay = gravity
        animation.attachAnimation(player, climb)
        animation.attachAnimation(player, walkLeft)
        animation.attachAnimation(player, walkRight)
    }
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile25, function (sprite, location) {
    if (!(playerFacingRight)) {
        sprite.vx += -1
        sprite.y += -1.5
    } else {
        sprite.vx += 1
        sprite.y += -1.5
    }
    if (scene.tileHitFrom(player, CollisionDirection.Bottom) == 1) {
        sprite.vx = 0
        sprite.vy = 0
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Albatoss, function (sprite, otherSprite) {
    overlapEnemy(sprite, otherSprite)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile4, function (sprite, location) {
    if (playerFacingRight) {
        sprite.vx += 1
        sprite.y += -1.5
    } else {
        sprite.vx += -1
        sprite.y += -1.5
    }
    if (scene.tileHitFrom(player, CollisionDirection.Bottom) == 1) {
        sprite.vx = 0
        sprite.vy = 0
    }
})
function createAnimations () {
    createPlayerWalkingRight()
    createPlayerWalkingLeft()
    createPlayerClimbing()
    createEnemiesWalkingRight()
    createEnemiesWalkingLeft()
    createEnemiesFlyingRight()
    createEnemiesFlyingLeft()
    createEnemiesJumping()
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile15, function (sprite, location) {
    if (playerFacingRight) {
        sprite.vx += 1
        sprite.y += 1.5
    } else {
        sprite.vx += -1
        sprite.y += 1.5
    }
    if (scene.tileHitFrom(player, CollisionDirection.Bottom) == 1) {
        sprite.vx = 0
        sprite.vy = 0
    }
})
function climbIdle () {
    player.setImage(climbing1)
}
function standIdle () {
    if (playerFacingRight) {
        player.setImage(walkingRight2)
    } else {
        player.setImage(walkingLeft2)
    }
}
scene.onOverlapTile(SpriteKind.Player, tiles.util.arrow10, function (sprite, location) {
    if (!(isFlippedUp)) {
        music.jumpUp.play()
        isFlippedUp = true
        sprite.ay = -1 * gravity
        walkingLeft2.flipY()
        walkingLeft1.flipY()
        walkingRight2.flipY()
        walkingRight1.flipY()
    }
})
function createEnemiesFlyingLeft () {
    flyLeft = animation.createAnimation(ActionKind.FlyingLeft, 100)
    flyLeft.addAnimationFrame(img`
        ...........................fff.
        .......ffff.............ffffff.
        ......f22f...........fffffff...
        .....f2222f........ff2fffffff..
        ....f2222f........f22fffffff...
        ....f22ff2f......f2ffffff......
        ....fff2f22f....f2ffffffff.....
        ...f2222f222f..f2fffffff.......
        ..f222ff2f222ff2ffffff.........
        ..f22f1f22ff222fffff...........
        ...ff11f222222ffff2............
        ..fff2222fff2ffffff222.........
        .fffff2ff..fffffffffff2........
        fffffff.....fffffff.ff.........
        fff...........f.ff.............
        .ff...........fffff............
        `)
    flyLeft.addAnimationFrame(img`
        ..........................f....
        ......ff.f2..............f.ff..
        .....f2222..............ffff...
        ....f22ff2............fffffff..
        ....fff2f2f........fffffffff...
        ...f2222f22ff...fff22fffffff...
        ..f222ff2f222fff222fffffff.....
        ..f22f1f22ff22222fffffff.......
        ...ff11f22222222ffff...........
        ..fff2222fff22fffff222.........
        .fffff2ff..fffffffffff2........
        fffffff.....fffffff.ff.........
        fff...........f.ff.............
        .ff...........fffff............
        ...............................
        ...............................
        `)
    flyLeft.addAnimationFrame(img`
        .......ff......................
        ....fff2f......................
        ...f2222f......ffff............
        ..f222ff2f..fff2222ff..........
        ..f22f1f22ff222222222ff........
        ...ff11f222222222222222ff......
        ..fff2222fff22ffff2222222ff....
        .fffff2fffffffffffffff22222ff..
        ffffffffff..fffffff.fffff2222ff
        ffff22ff......f.ff..ff...fffff.
        .ff.ff........fffff............
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        `)
    flyLeft.addAnimationFrame(img`
        .......ff......................
        ....fff2f......................
        ...f2222f......fff.............
        ..f222ff2f..fff222ff...........
        ..f22f1f22ff22222222ff.........
        ...ff11f22222222222222f........
        ..fff2222fff22ff2222222f.......
        .fffff2ff2fffffff2222222f......
        fffffff222ffffffff2222222ff....
        ffff..f2fffff.f.ff222f22f22f...
        .ff.ff2fffff..fffff222f22ff....
        ...f22ffff.........ff22f222f...
        ...fff.ff............fff.ff....
        ...............................
        ...............................
        ...............................
        `)
    flyLeft.addAnimationFrame(img`
        .......ff......................
        ....fff2f......................
        ...f2222f......fff.............
        ..f222ff2f..fff222ff...........
        ..f22f1f22ff22222222ff.........
        ...ff11f22222222222222f........
        ..fff2222fff22ff2222222f.......
        .fffff2ff2fffffff2222222f......
        ffffffff2ffffffff2222222f......
        ffff..f2fffffff.ff2222222f.....
        .ff...f2fffff.ffff22222f2f.....
        .....f2fffff.....f222222f......
        ....f2ffffff......f22f22f......
        ....fffffff.......f22ff2f......
        ...fff.ff.........f2f..ff......
        ...............................
        `)
    flyLeft.addAnimationFrame(img`
        .......ff......................
        ....fff2f......................
        ...f2222f.....ffff.............
        ..f222ff2f..ff2222ff...........
        ..f22f1f22ff22222222f..........
        ...ff11f2222222222222f.........
        ..fff2222fff22ff22222f.........
        .fffff2ff2ffffff222222f........
        ffffffff2fffffff222222f........
        ffff...f2ffffffff22222f........
        .ff....f2ffff.fff222222f.......
        ......f2fffff...f222222f.......
        ......f2ffff....f2222f2f.......
        .....f2fffff...f22f22ff........
        .....f2fff.f...f22f2f..........
        .....fff.f.....fff.f...........
        `)
}
function createPlayerClimbing () {
    climbing1 = img`
        ....fffffff.....
        ..fff22221fff...
        .ff222221111ff..
        .ff211221111ff..
        ff4f1112211f4ff.
        f44f1112222f44f.
        f44f1112221f44f.
        f444f12221f444f.
        f4444f222f4444f.
        fff444fff444fff.
        f12f4444444f22f.
        df22f44444f22f..
        fd422fffff22f...
        fddeeeeeeee4df..
        .fdeeeeeeeeddf..
        ..f1eeeee11ff...
        ..f1111111f.....
        ...f111222......
        ....222.........
        `
    climbing2 = img`
        .....fffffff....
        ...fff12222fff..
        ..ff111122222ff.
        ..ff111122112ff.
        .ff4f1122111f4ff
        .f44f2222111f44f
        .f44f1222111f44f
        .f444f12221f444f
        .f4444f222f4444f
        .fff444fff444fff
        .f22f4444444f21f
        ..f22f44444f22fd
        ...f22fffff224df
        ..fd4eeeeeeeeddf
        ..fddeeeeeeeedf.
        ...ff11eeeee1f..
        .....f1111111f..
        ......222111f...
        .........222....
        `
    climb = animation.createAnimation(ActionKind.Climbing, 100)
    climb.addAnimationFrame(climbing1)
    climb.addAnimationFrame(climbing2)
}
function createEnemiesWalkingRight () {
    shyWalkRight = animation.createAnimation(ActionKind.WalkingRight, 100)
    shyWalkRight.addAnimationFrame(img`
        . . . . f f f f f f f f . . . . 
        . . f f 2 2 2 2 2 f f f f . . . 
        . f 2 2 2 2 2 f f 1 1 1 1 f . . 
        f 2 2 2 2 2 2 f 1 1 1 1 1 1 f . 
        . f 2 2 2 2 f f 1 1 1 1 1 1 f . 
        . . f f f f f 1 1 f f 1 f f 1 f 
        . f f f f f f 1 1 f f 1 f f 1 f 
        . f 2 2 2 2 f 1 1 1 1 1 1 1 1 f 
        . f 2 2 2 2 f f 1 1 1 1 1 1 1 f 
        . . f 2 2 2 2 f 1 1 1 f 1 1 f f 
        . f f 2 2 2 f f f 1 1 f 1 1 f . 
        . f 2 2 2 2 2 f f f 1 1 1 f 2 f 
        f 2 2 2 f f 2 2 f f f f f 2 2 f 
        f f f 2 2 2 f f f 2 2 2 2 f f f 
        . . f f f f f f 1 f f 2 2 2 f . 
        . . . . f f 1 1 1 1 f f f f . . 
        `)
    shyWalkRight.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . f f 2 2 2 2 2 f f f f . . . 
        . f 2 2 2 2 2 f f 1 1 1 1 f . . 
        f 2 2 2 2 2 2 f 1 1 1 1 1 1 f . 
        . f 2 2 2 2 f f 1 1 1 1 1 1 f . 
        . . f f f f f 1 1 f f 1 f f 1 f 
        . f f f f f f 1 1 f f 1 f f 1 f 
        . f 2 2 2 2 f 1 1 1 1 1 1 1 1 f 
        . f 2 2 2 2 f f 1 1 1 1 1 1 1 f 
        . . f 2 2 2 2 f 1 1 1 f 1 1 f f 
        . f f 2 2 2 f f f 1 1 f 1 1 f . 
        . f 2 2 2 2 2 f f f 1 1 1 f 2 f 
        f 2 f f 2 2 2 f 2 f f f f f 2 f 
        f f 1 1 f f f f 2 2 2 f f 1 f f 
        . f f 1 1 f f f f f f 1 1 1 1 f 
        `)
    shyWalkRightUp = animation.createAnimation(ActionKind.WalkingRightUp, 100)
    shyWalkRightUp.addAnimationFrame(img`
        . . . . f f 1 1 1 1 f f f f . . 
        . . f f f f f f 1 f f 2 2 2 f . 
        f f f 2 2 2 f f f 2 2 2 2 f f f 
        f 2 2 2 f f 2 2 f f f f f 2 2 f 
        . f 2 2 2 2 2 f f f 1 1 1 f 2 f 
        . f f 2 2 2 f f f 1 1 f 1 1 f . 
        . . f 2 2 2 2 f 1 1 1 f 1 1 f f 
        . f 2 2 2 2 f f 1 1 1 1 1 1 1 f 
        . f 2 2 2 2 f 1 1 1 1 1 1 1 1 f 
        . f f f f f f 1 1 f f 1 f f 1 f 
        . . f f f f f 1 1 f f 1 f f 1 f 
        . f 2 2 2 2 f f 1 1 1 1 1 1 f . 
        f 2 2 2 2 2 2 f 1 1 1 1 1 1 f . 
        . f 2 2 2 2 2 f f 1 1 1 1 f . . 
        . . f f 2 2 2 2 2 f f f f . . . 
        . . . . f f f f f f f f . . . . 
        `)
    shyWalkRightUp.addAnimationFrame(img`
        . f f 1 1 f f f f f f 1 1 1 1 f 
        f f 1 1 f f f f 2 2 2 f f 1 f f 
        f 2 f f 2 2 2 f 2 f f f f f 2 f 
        . f 2 2 2 2 2 f f f 1 1 1 f 2 f 
        . f f 2 2 2 f f f 1 1 f 1 1 f . 
        . . f 2 2 2 2 f 1 1 1 f 1 1 f f 
        . f 2 2 2 2 f f 1 1 1 1 1 1 1 f 
        . f 2 2 2 2 f 1 1 1 1 1 1 1 1 f 
        . f f f f f f 1 1 f f 1 f f 1 f 
        . . f f f f f 1 1 f f 1 f f 1 f 
        . f 2 2 2 2 f f 1 1 1 1 1 1 f . 
        f 2 2 2 2 2 2 f 1 1 1 1 1 1 f . 
        . f 2 2 2 2 2 f f 1 1 1 1 f . . 
        . . f f 2 2 2 2 2 f f f f . . . 
        . . . . f f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        `)
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile11, function (sprite, location) {
    sprite.vx = 0
    sprite.vy = 0
    sprite.vy = 7 * pixelsToMeters
    sprite.y += 5
})
function setAction () {
    for (let value1 of sprites.allOfKind(SpriteKind.Albatoss)) {
        animation.setAction(value1, ActionKind.FlyingLeft)
    }
    for (let value2 of sprites.allOfKind(SpriteKind.ShyGuy)) {
        animation.setAction(value2, ActionKind.WalkingRight)
    }
    for (let value3 of sprites.allOfKind(SpriteKind.Ninji)) {
        animation.setAction(value3, ActionKind.Jumping)
    }
}
function createPlayerWalkingLeft () {
    walkingLeft2 = img`
        ....fffffff.....
        .f555f22211ff...
        .555552211112f..
        f5555522111122f.
        f55555f2211222f.
        ff555f4ff222122f
        f121ff444ff1112f
        f12211f4444f112f
        f122222ff444ff2f
        f2ffffff2f4444ff
        .ffdfdfdffff44ff
        .ffdfdfdddf2fff.
        ..fdddddddffffe.
        ...fdfddd4444eee
        ..fd222444dd44ee
        .fd4222444ddd4ee
        .fdf1211444444ee
        ...ff111111ffeee
        ....f222222f....
        `
    walkingLeft1 = img`
        ....fffffff.....
        .f555f22211ff...
        .555552211112f..
        f5555522111122f.
        f55555f2211222f.
        ff555f4ff222122f
        f121ff444ff1112f
        f12211f4444f112f
        f122222ff444ff2f
        f2ffffff2f4444ff
        .ffdfdfdffff44ff
        .ffdfdfdddf2fff.
        ..fdddddddffffe.
        ...fdfddd4444eee
        ....222444dd44ee
        ...422244ddd44ee
        ...21214ddd444ee
        ...22f111112f.ee
        ..22222222222...
        `
    walkLeft = animation.createAnimation(ActionKind.WalkingLeft, 100)
    walkLeft.addAnimationFrame(walkingLeft1)
    walkLeft.addAnimationFrame(walkingLeft2)
}
scene.onOverlapTile(SpriteKind.Player, tiles.util.arrow15, function (sprite, location) {
    if (isFlippedUp) {
        music.jumpDown.play()
        isFlippedUp = false
        walkingLeft2.flipY()
        walkingLeft1.flipY()
        walkingRight2.flipY()
        walkingRight1.flipY()
        sprite.ay = gravity
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile21, function (sprite, location) {
    if (playerFacingRight) {
        sprite.vx += 1
        sprite.y += -1.5
    } else {
        sprite.vx += -1
        sprite.y += -1.5
    }
    if (scene.tileHitFrom(player, CollisionDirection.Bottom) == 1) {
        sprite.vx = 0
        sprite.vy = 0
    }
})
function createPlayerWalkingRight () {
    walkingRight2 = img`
        .....fffffff....
        ...ff11222f555f.
        ..f211112255555.
        .f2211112255555f
        .f2221122f55555f
        f221222ff4f555ff
        f2111ff444ff121f
        f211f4444f11221f
        f2ff444ff222221f
        ff4444f2ffffff2f
        ff44ffffdfdfdff.
        .fff2fdddfdfdff.
        .effffdddddddf..
        eee4444dddfdf...
        ee44dd444222df..
        ee4ddd4442224df.
        ee4444441121fdf.
        eeeff111111ff...
        ....f222222f....
        `
    walkingRight1 = img`
        .....fffffff....
        ...ff11222f555f.
        ..f211112255555.
        .f2211112255555f
        .f2221122f55555f
        f221222ff4f555ff
        f2111ff444ff121f
        f211f4444f11221f
        f2ff444ff222221f
        ff4444f2ffffff2f
        ff44ffffdfdfdff.
        .fff2fdddfdfdff.
        .effffdddddddf..
        eee4444dddfdf...
        ee44dd444222....
        ee44ddd442224...
        ee444ddd41212...
        ee.f211111f22...
        ...22222222222..
        `
    walkRight = animation.createAnimation(ActionKind.WalkingRight, 100)
    walkRight.addAnimationFrame(walkingRight1)
    walkRight.addAnimationFrame(walkingRight2)
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile24, function (sprite, location) {
    if (!(playerFacingRight)) {
        sprite.vx += -1
        sprite.y += -1.5
    } else {
        sprite.vx += 1
        sprite.y += -1.5
    }
    if (scene.tileHitFrom(player, CollisionDirection.Bottom) == 1) {
        sprite.vx = 0
        sprite.vy = 0
    }
})
function setGoals () {
    for (let value4 of tiles.getTilesByType(myTiles.tile5)) {
        gem = sprites.create(img`
            . . . . 8 8 8 8 8 8 8 8 . . . . 
            . . . 8 8 8 8 9 9 9 1 1 1 . . . 
            . . 8 8 8 8 9 9 9 9 1 1 1 1 . . 
            . 8 8 8 8 8 8 9 9 1 1 1 1 1 1 . 
            8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 1 
            8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 1 
            9 9 9 9 9 f 9 9 9 9 f 9 9 9 9 9 
            9 9 9 9 9 f 9 9 1 1 f 1 1 1 1 1 
            9 9 9 9 9 f 9 9 1 1 f 1 1 1 1 1 
            . 9 9 9 9 9 9 9 1 1 1 1 1 1 1 . 
            . . 9 9 9 9 9 9 1 1 1 1 1 1 . . 
            . . . 9 9 9 9 9 1 1 1 1 1 . . . 
            . . . . 9 9 9 9 1 1 1 1 . . . . 
            . . . . . 9 9 9 1 1 1 . . . . . 
            . . . . . . 9 9 1 1 . . . . . . 
            . . . . . . . 9 1 . . . . . . . 
            `, SpriteKind.Gem)
        tiles.placeOnTile(gem, value4)
        tiles.setTileAt(value4, myTiles.transparency16)
    }
    for (let value5 of tiles.getTilesByType(myTiles.tile19)) {
        gem = sprites.create(img`
            9 9 9 9 8 8 8 8 8 8 8 8 9 9 9 9 
            9 9 9 8 8 8 8 9 9 9 1 1 1 9 9 6 
            9 9 8 8 8 8 9 9 9 9 1 1 1 1 9 9 
            9 8 8 8 8 8 8 9 9 1 1 1 1 1 1 9 
            8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 1 
            8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 1 
            9 9 9 9 9 f 9 9 9 9 f 9 9 9 9 9 
            9 9 9 9 9 f 9 9 1 1 f 1 1 1 1 1 
            9 9 9 9 9 f 9 9 1 1 f 1 1 1 1 1 
            9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 9 
            9 c 9 9 9 9 9 9 1 1 1 1 1 1 1 9 
            9 9 6 9 9 9 9 9 1 1 1 1 1 1 6 9 
            9 9 6 9 9 9 9 9 1 1 1 1 6 1 9 9 
            9 9 9 9 9 9 9 9 1 1 1 6 9 6 9 9 
            9 9 9 9 9 9 9 9 1 1 9 9 9 9 6 9 
            9 9 6 9 9 9 9 9 1 9 9 9 9 9 9 9 
            `, SpriteKind.Gem)
        tiles.placeOnTile(gem, value5)
        tiles.setTileAt(value5, grafxkid.winterGround)
    }
    for (let value20 of tiles.getTilesByType(myTiles.tile6)) {
        gem = sprites.create(img`
            f f f f 8 8 8 8 8 8 8 8 f f f f 
            f f f 8 8 8 8 9 9 9 1 1 1 f f f 
            f f 8 8 8 8 9 9 9 9 1 1 1 1 f f 
            f 8 8 8 8 8 8 9 9 1 1 1 1 1 1 f 
            8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 1 
            8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 1 
            9 9 9 9 9 f 9 9 9 9 f 9 9 9 9 9 
            9 9 9 9 9 f 9 9 1 1 f 1 1 1 1 1 
            9 9 9 9 9 f 9 9 1 1 f 1 1 1 1 1 
            f 9 9 9 9 9 9 9 1 1 1 1 1 1 1 f 
            f f 9 9 9 9 9 9 1 1 1 1 1 1 f f 
            f f f 9 9 9 9 9 1 1 1 1 1 f f f 
            f f f f 9 9 9 9 1 1 1 1 f f f f 
            f f f f f 9 9 9 1 1 1 f f f f f 
            f f f f f f 9 9 1 1 f f f f f f 
            f f f f f f f 9 1 f f f f f f f 
            `, SpriteKind.Gem)
        tiles.placeOnTile(gem, value20)
        tiles.setTileAt(value20, sprites.builtin.forestTiles10)
    }
    for (let value6 of tiles.getTilesByType(tiles.util.object0)) {
        star = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 5 . . . . . . . . 
            . . . . . 5 5 5 5 . . . . . . . 
            . . . . 5 5 5 5 5 5 . . . . . . 
            . 5 5 5 5 5 5 5 5 5 5 5 5 . . . 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
            . 5 5 5 5 f 1 1 f 5 5 5 5 . . . 
            . . 5 5 5 f 5 1 f 5 5 5 . . . . 
            . . . 5 5 5 5 5 5 5 5 5 . . . . 
            . . . 5 5 5 5 5 5 5 5 . . . . . 
            . . . 5 5 5 5 5 5 5 5 . . . . . 
            . . . 5 5 5 5 5 5 5 5 . . . . . 
            . . . 5 5 . . . . 5 5 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Star)
        tiles.placeOnTile(star, value6)
        tiles.setTileAt(value6, myTiles.transparency16)
    }
    for (let value7 of tiles.getTilesByType(myTiles.tile7)) {
        mushroom = sprites.create(img`
            . . . . . f f f f f f . . . . . 
            . . . f f 4 5 5 5 5 4 f f . . . 
            . . f 4 4 5 5 5 5 5 5 4 4 f . . 
            . f 5 5 5 5 4 4 4 4 5 5 5 5 f . 
            f 5 5 5 5 4 4 4 4 4 4 5 5 5 5 f 
            f 5 5 5 5 4 4 4 4 4 4 5 5 5 5 f 
            f 5 4 4 5 5 4 4 4 4 5 5 4 4 5 f 
            f 4 4 4 4 5 5 5 5 5 5 4 4 4 4 f 
            f 4 4 4 4 5 5 5 5 5 5 4 4 4 4 f 
            f f 4 4 4 5 5 5 5 5 5 4 4 4 f f 
            . f f f f f f f f f f f f f f . 
            . . . . f 5 f 5 5 f 5 f . . . . 
            . . . f 5 5 f 5 5 f 5 5 f . . . 
            . . . f 5 5 5 5 5 5 5 5 f . . . 
            . . . f f 5 5 5 5 5 5 f f . . . 
            . . . . f f f f f f f f . . . . 
            `, SpriteKind.GoldMushroom)
        tiles.placeOnTile(mushroom, value7)
        tiles.setTileAt(value7, myTiles.transparency16)
    }
}
function setLevelMap () {
    // myTiles.tile14 summer slope up
    // myTiles.tile15 summer slope up
    // myTiles.tile16 summer slope down
    // myTiles.tile17 summer slope down
    // myTiles.tile19 winter slope up
    // myTiles.tile20 winter slope down
    if (currentLevel == 1) {
        scene.setBackgroundImage(img`
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999991111999999999999999999999999999999999999999999999999999999999999999999999999999911119999999999999999999999999999999999999999999999999999999999999999999999
            9999111111119999999999999999999999999999999999999999999999999999999999999999999999991111111199999999999999999999999999999999999999999999999999999999999999999999
            9991111111111999999999999999999999999999999999999999999999999999999999999999999999911111111119999999999999999999999999999999999999999999999999999999999999999999
            9911111111111199999999999999999999999999999999999999999999999999999999999999999999111111111111999999999999999999999999999999999999999999999999999999999999999999
            9111111111111119999999999999999999999999999999999999999999999999999999999999999991111111111111199999999999999999999999999999999999999999999999999999999999999999
            9111111111111119999999999999999999999999999999999999999999999999999999999999999991111111111111199999999999999999999999999999999999999999999999999999999999999999
            1111111111111111999999999999999999999999999999999999999999999999999999999999999911111111111111119999999999999999999999999999999999999999999999999999999999999999
            1111111111111111999999999999999999999999999999999999999999999999999999999999999911111111111111119999999999999999999999999999999999999999999999999999999999999999
            1111111111111111119999999999999999999911119999999999999999999999999999999999991111111111111111111199999999999999999999111199999999999999999999999999999999999911
            1111111111111111111199999999999999991111111199999999999999999999999999999999111111111111111111111111999999999999999911111111999999999999999999999999999999991111
            1111111111111111111119999999999999911111111119999999999999999999999999999991111111111111111111111111199999999999999111111111199999999999999999999999999999911111
            1111111111111111111111999999999999111111111111999999999999999999999999999911111111111111111111111111119999999999991111111111119999999999999999999999999999111111
            1111111111111111111111199999999991111111111111199999999999999999999999999111111111111111111111111111111999999999911111111111111999999999999999999999999991111111
            1111111111111111111111199999999991111111111111199999999999999999999999999111111111111111111111111111111999999999911111111111111999999999999999999999999991111111
            1111111111111111111111119999999911111111111111119999999999999999999999991111111111111111111111111111111199999999111111111111111199999999999999999999999911111111
            1111111111111111111111119999999911111111111111119999999999999999999999991111111111111111111111111111111199999999111111111111111199999999999999999999999911111111
            1111111111111111111111111199991111111111111111111199991111999999999999111111111111111111111111111111111111999911111111111111111111999911119999999999991111111111
            1111111111111111111111111111111111111111111111111111111111119999999911111111111111111111111111111111111111111111111111111111111111111111111199999999111111111111
            1111111111111111111111111111111111111111111111111111111111111999999111111111111111111111111111111111111111111111111111111111111111111111111119999991111111111111
            1111111111111111111111111111111111111111111111111111111111111199991111111111111111111111111111111111111111111111111111111111111111111111111111999911111111111111
            1111111111111111111111111111111111111111111111111111111111111119911111111111111111111111111111111111111111111111111111111111111111111111111111199111111111111111
            1111111111111111111111111111111111111111111111111111111111111119911111111111111111111111111111111111111111111111111111111111111111111111111111199111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1199991111111111119999111111111111999911111111111199991111111111119999111111111111999911111111111199991111111111119999111111111111999911111111111199991111111111
            9999999911111111999999991111111199999999111111119999999911111111999999991111111199999999111111119999999911111111999999991111111199999999111111119999999911111111
            9999999999111199999999999911119999999999991111999999999999111199999999999911119999999999991111999999999999111199999999999911119999999999991111999999999999111199
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999666699999999999966669999999999996666999999999999666699999999999966669999999999996666999999999999666699999999999966669999999999996666999999999999666699
            9999999966666666999999996666666699999999666666669999999966666666999999996666666699999999666666669999999966666666999999996666666699999999666666669999999966666666
            6699996666666666669999666666666666999966666666666699996666666666669999666666666666999966666666666699996666666666669999666666666666999966666666666699996666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6668866666688666666886666668866666688666666886666668866666688666666886666668866666688666666886666668866666688666666886666668866666688666666886666668866666688666
            8688886886888868868888688688886886888868868888688688886886888868868888688688886886888868868888688688886886888868868888688688886886888868868888688688886886888868
            6888888668888886688888866888888668888886688888866888888668888886688888866888888668888886688888866888888668888886688888866888888668888886688888866888888668888886
            6687786666877866668778666687786666877866668888666687786666877866668778666687786666877866668778666687786666877866668778666687786666877866668778666687786666877866
            6677776666777766667777666677776666777766668888666677776666777766667777666677776666777766667777666677776666777766667777666677776666777766667777666677776666777766
            6677776666777766667777666677776666777766666886666677776666777766667777666677776666777766667777666677776666777766667777666677776666777766667777666677776666777766
            6766667667666676676666766766667667666676666886666766667667666676676666766766667667666676676666766766667667666676676666766766667667666676676666766766667667666676
            6777777667777776677777766777777667777776666886666777777667777776677777766777777667777776677777766777777667777776677777766777777667777776677777766777777667777776
            667777666677776666777766667777666677776666ecce666677776666777766667777666677776666777766667777666677776666777766667777666677776666777766667777666677776666777766
            4ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ecccce44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee4
            488dd884488dd884488dd884488dd884488dd88448cccc84488dd884488dd884488dd884488dd884488dd884488dd884488dd884488dd884488dd884488dd884488dd884488dd884488dd884488dd884
            666dd666666dd666666dd666666dd666666dd666666cc666666dd666666dd666666dd666666dd666666dd666666dd666666dd666666dd666666dd666666dd666666dd666666dd666666dd666666dd666
            7666666776666667766666677666666776666667766667777666666776666667766666677666666776666667766666677666666776666667766666677666666776666667766666677666666776666667
            7777777777777777777777777777777777777777669997777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            6666666666666666666666666666666666666666699996666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666999996666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            7777777777777777777777999999999777777777777777777777777777777777777777777777777777777777777777799999999997777777777777777777777777777777777777777777777777777777
            7777777777777777777777799999977777777777777777777777777777777777777777777777777777777777777777777999999977777777777777777777777777777777777777777777777777777777
            7776677777777777777777799999777777777777777777777777777777777777777777777777777777777777777667777799999977777777777777777777777777777777777777777777777777777777
            7766667777777777777777699997777777777777777777777777777777777777777777777777777777777777776666777779999967777777777777777777777777777777777777777777777777777777
            7766667777767777777777699997777777777777777677777777777777777777777677777777777777767777776666777777999966677777777777777777777777777777777677777777777777767777
            7688886776767677777776999977777777777777767676777777777777777777767676777777777776767677768888677777799996666666666666666666666666777777767676777777777776767677
            7666666777777777777776999977777777777777777777777777777777777777777777777777777777777777766666677777779999966666666666666666666666667777777777777777777777777777
            7766667777777777777769999777777777777777777777777777777777777777777777777777777777777777776666777777777799999999999999999999999999666777777777777777777777777777
            7774477777777777777769999777777777777777777777777777777777777777777777777777777777777777777447777777777777777777777777777777777999996777777777777777777777777777
            776dd67777777777777699997777777777777777777777777777777777777777777777777777777777777777776dd6777777777777777777777777777777777779999677777777777777777777777777
            766dd66777777777777699997777777777777777777777777776677777777777777777777777777777777777766dd6677777777777777777777777777776677777999677777777777777777777766777
            77666677777777711d11d11d1177777777777777777777777766667777777777777777777777777777777777776666777777777777777777777777777766667777799967777777777777777777666677
            7777777777777711d11d11d11d77777777767777777777777766667777777777777677777777777777777777777777777776777777777777777677777766667777799967777777777776777777666677
            77777777777777ddddddddddd677777776767677777777777688886777777777767676777777777777777777777777777676767777777777767676777688886777779996777777777676767776888867
            7777777777777766666666666777777777777777777777777666666777777777777777777777777777777777777777777777777777777777777777777666666777779996777777777777777776666667
            7777777777777777699997777777777777777777777777777766667777777777777777777777777777777777777777777777777777777777777777777766667777777999677777777777777777666677
            7777777777777777699997777777777777777777777777777774477777777777777777777777777777777777777777777777777777777777777777777774477777777999677777777777777777744777
            777777777777777699997777777777777777777777777777776dd6777777777777777777777777777777777777777777777777777777777777777777776dd677777777999677777777777777776dd677
            777777777777777699997777777777777777777777777777766dd6677777777777777777777777777777777777777777777777777777777777777777766dd667777777999677777777777777766dd667
            7777677777776769999767777777677777776777777767777766667777776777777767777777677777776777777767777777677777776777777767777766667777776779996767777777677777666677
            6777767767777669699776776777767767777677677776776777767767777677677776776777767767777677677776776777767767777677677776776777767767777679696776776777767767777677
            7676767676767696967676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676969676767676767676767676
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            `)
        tiles.setTilemap(tilemap`level`)
    } else if (currentLevel == 2) {
        scene.setBackgroundImage(img`
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999911119999999999999999999999999999999999999999999999999999999999999999999999999999999999991111999999
            9999999999999999999999999999999999999999999999999999999999991111111199999999999999999999999999999999999999999999999999999999999999999999999999999999111111119999
            9999999999999999999999999999999999999999999999999999999999911111111119999999999999999999999999999999999999999999999999999999999999999999999999999991111111111999
            9999999999999999999999999999999999999999999999999999999999111111111111999999999999999999999999999999999999999999999999999999999999999999999999999911111111111199
            9999999999999999999999999999999999999999999999999999999991111111111111199999999999999999999999999999999999999999999999999999999999999999999999999111111111111119
            9999999999999999999999999999999999999999999999999999999991111111111111199999999999999999999999999999999999999999999999999999999999999999999999999111111111111119
            9999999999999999999999999999999999999999999999999999999911111111111111119999999999999999999999999999999999999999999999999999999999999999999999991111111111111111
            9999999999999999999999999999999999999999999999999999999911111111111111119999999999999999999999999999999999999999999999999999999999999999999999991111111111111111
            1199999999999999999999999999999999999999999999999999991111111111111111111199999999999999999999999999999999999911119999999999999999999999999999111111111111111111
            1111999999999999999999999999999999999999999999999999111111111111111111111111999999999999999999999999999999991111111199999999999999999999999911111111111111111111
            1111199999999999999999999999999999999999999999999991111111111111111111111111199999999999999999999999999999911111111119999999999999999999999111111111111111111111
            1111119999999999999999999999999999999999999999999911111111111111111111111111119999999999999999999999999999111111111111999999999999999999991111111111111111111111
            1111111999999999999999999999999999999999999999999111111111111111111111111111111999999999999999999999999991111111111111199999999999999999911111111111111111111111
            1111111999999999999999999999999999999999999999999111111111111111111111111111111999999999999999999999999991111111111111199999999999999999911111111111111111111111
            1111111199999999999999999999999999999999999999991111111111111111111111111111111199999999999999999999999911111111111111119999999999999999111111111111111111111111
            1111111199999999999999999999999999999999999999991111111111111111111111111111111199999999999999999999999911111111111111119999999999999999111111111111111111111111
            1111111111999911119999999999991111999999999999111111111111111111111111111111111111999911119999999999991111111111111111111199999999999911111111111111111111111111
            1111111111111111111199999999111111119999999911111111111111111111111111111111111111111111111199999999111111111111111111111111999999991111111111111111111111111111
            1111111111111111111119999991111111111999999111111111111111111111111111111111111111111111111119999991111111111111111111111111199999911111111111111111111111111111
            1111111111111111111111999911111111111199991111111111111111111111111111111111111111111111111111999911111111111111111111111111119999111111111111111111111111111111
            1111111111111111111111199111111111111119911111111111111111111111111111111111111111111111111111199111111111111111111111111111111991111111111111111111111111111111
            1111111111111111111111199111111111111119911111111111111111111111111111111111111111111111111111199111111111111111111111111111111991111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f1ff11111111111111111111111111111111111111
            111111111111111111111111111111111111111111111f1ff11111111111111111111111111111111111111111111111111111111111111111111f1f11f1111111111111111111111111111111111111
            11111111111111111111111111111111111111111111f1f11f1111111111111111111111111111111111111111111111111111111111111111111f1f1111111ff1f11111111111111111111111111111
            11111111111111111111111111111111111111111111f1f1111111111111111111111111111111111111111111111111111111111111111111111111f11111f11f1f1111111111111111111111111111
            11111111111111111111111111111111111111111111111f111111111111111111111111111111111111111111111111111111111111111111111111f11111111f1f1111111111111111111111111111
            11111111111111111111111111111111111111111111111f111111111111111111111111111111111111111111111111111111111111111111111111f1111111f1111111111111111111111111111111
            11111111111111111111111111111111111111111111111f11111111111111111111111111111111111111111111111111111111111111111111111777777cccf1111111111111111111111111111111
            111111111111111111111111111111111111111111111777ccc711111111111111111111111111111111111111111111111111111111111111111777777777ccfc711111111111111111111111111111
            1111111111111111111111111111111111111111111777777cccc7111111111111111111111111111111111111111111111111111111111111177777777777cccccc7111111111111111111111111111
            111111111111111111111111111111111111111117777777ccccccc7111111111111111111111111111111111111111111111111111111111777777777777ccccccccc71111111111111111111111111
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999966666666666666699999999999999999999999999999999999999999999999999999999966666666666666666666669999999999999999999999999
            9999999999999999999999999999999999999999999666666666669999999999999999999999999999999999999999999999999999999999999666666666666666666999999999999999999999999999
            9999999999999999999999999999999999999999999996666666999999999999999999999999999999999999999999999999999999999999999996666666666666699999999999999999999999999999
            9999999999999999999999999999999999999999999999969999999999999999999999999999999999999999999999999999999999999999999999996666666669999999999999999999999999999999
            9999999999999999999999999999999999999999999969969999999999999999999999999999999999999999999999999999999999999999999999996999999969969999999999999999999999999999
            9999999999999999999999999999999999999999999969699699999999999999999999999999999999999999999999999999999999999999999996996999996996969999999999999999999999999999
            9999999999999999999999999999999999999999999996666999999999999999999999999999999999999999999999999999999999999999999996969969999666699999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999666699999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            `)
        tiles.setTilemap(tilemap`level_0`)
    } else if (currentLevel == 3) {
        scene.setBackgroundImage(img`
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5bb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5bbbbbbbbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5bbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5bbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5bbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbccbbbbbbccbbbbbbccbbbbbbccbbbbbbccbbbbbbccbbbbbbccbbbbbbccbbbbbbccbbbbbbccbbbbbbccbbbbbbccbbbbbbccbbbbbbccbbbbbbccbbbbbbccbbbbbbccbbbbbbccbbbbbbccbbbbbbccbbb
            cbccccbccbccccbccbccccbccbccccbccbccccbccbccccbccbccccbccbccccbccbccccbccbccccbccbccccbccbccccbccbccccbccbccccbccbccccbccbccccbccbccccbccbccccbccbccccbccbccccbc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            fccccccffccccccffccccccffccccccffccccccffccccccffccccccffccccccffccccccffccccccffccccccffccccccffccccccffccccccffccccccffccccccffccccccffccccccffccccccffccccccf
            ffcffcffffcffcffffcffcffffcffcffffcffcffffcffcffffcffcffffcffcffffcffcffffcffcffffcffcffffcffcffffcffcffffcffcffffcffcffffcffcffffcffcffffcffcffffcffcffffcffcff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            effffffeeffffffeeffffffeeffffffeeffffffeeffffffeeffffffeeffffffeeffffffeeffffffeeffffffeeffffffeeffffffeeffffffeeffffffeeffffffeeffffffeeffffffeeffffffeeffffffe
            eefeefeeeefeefeeeefeefeeeefeefeeeefeefeeeefeefeeeefeefeeeefeefeeeefeefeeeefeefeeeefeefeeeefeefeeeefeefeeeefeefeeeefeefeeeefeefeeeefeefeeeefeefeeeefeefeeeefeefee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            4eeeeee44eeeeee44eeeeee44eeeeee44eeeeee44eeeeee44eeeeee44eeeeee44eeeeee44eeeeee44eeeeee44eeeeee44eeeeee44eeeeee44eeeeee44eeeeee44eeeeee44eeeeee44eeeeee44eeeeee4
            44e44e4444e44e4444e44e4444e44e4444e44e4444e44e4444e44e4444e44e4444e44e4444e44e4444e44e4444e44e4444e44e4444e44e4444e44e4444e44e4444e44e4444e44e4444e44e4444e44e44
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            e44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44e
            4eeddee44eeddee44eeddee44eeddee44eeddee44eeddee44eeddee44eeddee44eeddee44eeddee44eeddee44eeddee44eeddee44eeddee44eeddee44eeddee44eeddee44eeddee44eeddee44eeddee4
            eeeddeeeeeeddeeeeeeddeeeeeeddeeeeeeddeeeeeeddeeeeeeddeeeeeeddeeeeeeddeeeeeeddeeeeeeddeeeeeeddeeeeeeddeeeeeeddeeeeeeddeeeeeeddeeeeeeddeeeeeeddeeeeeeddeeeeeeddeee
            4eeeeee44eeeeee44eeeeee44eeeeee44eeeeee44eeeeee44eeeeee44eeeeee44eeeeee44eeeeee44eeeeee44eeeeee44eeeeee44eeeeee44eeeeee44eeeeee44eeeeee44eeeeee44eeeeee44eeeeee4
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            444444444e4444444114411444444444444444444444444444444444444444444e4444444e44444441144114444444444e444444444eeeeeeee44444444444444e44444441144114444444444e444444
            4444444444ee44444dd11dd4444444eeeeeeeeeeeeeeeeeeeeeeeeeeee44444444ee444444ee44444dd11dd44444444444ee4444444eeeeeeee444444444444444ee44444dd11dd44444444444ee4444
            44444444444444e44dddddd44444ee4444444444444444444444444444ee4444444444e4444444e44dddddd444444444444444e4444eeeeeeee4444444444444444444e44dddddd444444444444444e4
            444444444444ee444dd44dd4444e44dddddddddddddddddddddddddddd44e4444444ee444444ee444dd44dd4444444444444ee44444eeeeeeeee4444444444444444ee444dd44dd4444444444444ee44
            44444444444444444ddeedd444e4dddddddddddddddddddddddddddddddd4e4444444444444444444ddeedd44444444444444444444eeeeeeeee444444444444444444444ddeedd44444444444444444
            4444444444e444444eeeeee44e4dddddddddddddddddddddddddddddddddd4e444e4444444e444444eeeeee44444444444e44444444eeeeeeeee44444444444444e444444eeeeee44444444444e44444
            44444444444ee4444ee44ee4e4dddd4444444444444444444444444444dddd4e444ee444444ee4444ee44ee444444444444ee4444444eeeeeeee444444444444444ee4444ee44ee444444444444ee444
            44444444444444444444444e4ddd44444444444444444444444444444444ddd4e44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4e44444444444444444444e4ddd44444411441144e4444444e44444444444ddd4ee4444444444444444444444444444444444444444444444444444444444444444444444e4444444114411444444444
            44ee44444444444444444e4ddd4444444dd11dd444ee444444ee4444444444ddd44eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee44444444ee44444dd11dd444444444
            444444e4444444444444e4ddd44444444dddddd4444444e4444444e44444444dddd444444444444444444444444444444444444444444444444444444444444444ee4444444444e44dddddd444444444
            4444ee4444444444444e4ddd444444444dd44dd44444ee444444ee4444444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd44e4444444ee444dd44dd444444444
            444444444444444444e4ddd4444444444ddeedd44444444444444444444444444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4e44444444444ddeedd444444444
            44e44444444444444e4ddd44444444444eeeeee444e4444444e4444444444444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4e444e444444eeeeee444444444
            444ee44444444444e4ddd444444444444ee44ee4444ee444444ee44444444444444444444444444444444444444444444444444444444444444444444444444444dddd4e444ee4444ee44ee444444444
            444444444444444e4ddd4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444ddd4e44444444444444444444444
            44444444444444e4ddd444444e44444444444444444444444114411444444444444444444e444444444444444444444441144114444444444e4444444444444444444ddd4e444444444444444e444444
            4444444444444e4ddd44444444ee444444444444444444444dd11dd4444444444444444444ee444444444444444444444dd11dd44444444444ee444444444444444444ddd4e444444444444444ee4444
            444444444444e4ddd4444444444444e444444444444444444dddddd44444444444444444444444e444444444444444444dddddd444444444444444e4444444444444444ddd4e444444444444444444e4
            444ee444444eeddd444ee444444eee44444ee444444ee4444ddeedd4444ee444444ee444444eee44444ee444444ee4444ddeedd4444ee444444eee44444ee444444ee444dddee444444ee444444eee44
            4eeee4e44eeeede44eeee4e44eeee4e44eeee4e44eeee4e44eeeede44eeee4e44eeee4e44eeee4e44eeee4e44eeee4e44eeeede44eeee4e44eeee4e44eeee4e44eeee4e44eeeeee44eeee4e44eeee4e4
            eeeeeee4eeeeeee4eeeeeee4eeeeeee4eeeeeee4eeeeeee4eeeeeee4eeeeeee4eeeeeee4eeeeeee4eeeeeee4eeeeeee4eeeeeee4eeeeeee4eeeeeee4eeeeeee4eeeeeee4eeeeeee4eeeeeee4eeeeeee4
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eee44eeeeee44eeeeee44eeeeee44eeeeee44eeeeee44eeeeee44eeeeee44eeeeee44eeeeee44eeeeee44eeeeee44eeeeee44eeeeee44eeeeee44eeeeee44eeeeee44eeeeee44eeeeee44eeeeee44eee
            e4e4444ee4e4444ee4e4444ee4e4444ee4e4444ee4e4444ee4e4444ee4e4444ee4e4444ee4e4444ee4e4444ee4e4444ee4e4444ee4e4444ee4e4444ee4e4444ee4e4444ee4e4444ee4e4444ee4e4444e
            e4444444e4444444e4444444e4444444e4444444e4444444e4444444e4444444e4444444e4444444e4444444e4444444e4444444e4444444e4444444e4444444e4444444e4444444e4444444e4444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            `)
        tiles.setTilemap(tilemap`level_1`)
    } else if (currentLevel == 4) {
        scene.setBackgroundImage(img`
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bb1bbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbb5bbbbbbbbbbbb1bbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbb5bbbbb1bbbbbb1bbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb51115bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb51115bbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111bbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5b5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb51115bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5b5bbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbb1bbbbbbbbbbbbbbb1bbbbbbbbbbbbbbb1bbbbbbbbbbbbbbb1bbbbbbbbbbbbbbb1bbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5bbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb515bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb515bbbbbbbbbbbbbbbbbbb
            bbbbbbb1bbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbb5bbbbbbbbbbb1bbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbb5bbbbbbbbbbb1bbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbb1bbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbb1bbbbbbbbbbbbb
            bbb51115bbbbbbbbbbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbb111bbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbb5b5bbbbbbbbbbbbbbbb51115bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb51115bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbb1bbbbbbbbb5bbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbb1bbbbbbbbbbbbbbb1bbbbbbbbb5bbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbb1
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbb515bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbb1bbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbb1bbbbbbbb
            bbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb51115bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5bbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb51115bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5b5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb51115bbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbb
            bbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbb5bbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb515bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbccccbbbbbbbbbbbbccccbbbbbbbbbbbbccccbbbbbbbbbbbbccccbbbbbbbbbbbbccccbbbbbbbbbbbbccccbbbbbbbbbbbbccccbbbbbbbbbbbbccccbbbbbbbbbbbbccccbbbbbbbbbbbbccccbbbbbb
            bbbbccccccccbbbbbbbbccccccccbbbbbbbbccccccccbbbbbbbbccccccccbbbbbbbbccccccccbbbbbbbbccccccccbbbbbbbbccccccccbbbbbbbbccccccccbbbbbbbbccccccccbbbbbbbbccccccccbbbb
            bbccccccccccccbbbbccccccccccccbbbbccccccccccccbbbbccccccccccccbbbbccccccccccccbbbbccccccccccccbbbbccccccccccccbbbbccccccccccccbbbbccccccccccccbbbbccccccccccccbb
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccbbccccccbbccccccbbccccccbbccccccccccccccccccccccbbccccccbbccccccbbccccccbbccccccbbccccccccccccccccccccccccccccccccccccccbbccccccbbccccccbbccccccbbccccccbbccc
            bcbbbbcbbcbbbbcbbcbbbbcbbcbbbbccccccccccccccccccccbbbbcbbcbbbbcbbcbbbbcbbcbbbbcbbcbbbbccccccccccccccccccccccccccccccccccccbbbbcbbcbbbbcbbcbbbbcbbcbbbbcbbcbbbbcb
            dbbbbbbddbbbbbbddbbbbbbddbbbbbbccccccccccccccccccbbbbbbddbbbbbbddbbbbbbddbbbbbbddbbbbbbccccccccccccccccccccccccccccccccccbbbbbbddbbbbbbddbbbbbbddbbbbbbddbbbbbbd
            ddb11bddddb11bddddb11bddddbbbbbccccccccccccccccccbbbbbddddb11bddddb11bddddb11bddddbbbbbccccccccccccccccccccccccccccccccccbbbbbddddb11bddddb11bddddb11bddddb11bdd
            dd1111dddd1111dddd1111ddddbbbbbbccccccccccccccccbbbbbbdddd1111dddd1111dddd1111ddddbbbbbbccccccccccccccccccccccccccccccccbbbbbbdddd1111dddd1111dddd1111dddd1111dd
            dd1111dddd1111dddd1111dddddbbbbbccccccccccccccccbbbbbddddd1111dddd1111dddd1111dddddbbbbbccccccccccccccccccccccccccccccccbbbbbddddd1111dddd1111dddd1111dddd1111dd
            d1dddd1dd1dddd1dd1dddd1ddddbbbbbccccccccccccccccbbbbbdddd1dddd1dd1dddd1dd1dddd1ddddbbbbbccccccccccccccccccccccccccccccccbbbbbdddd1dddd1dd1dddd1dd1dddd1dd1dddd1d
            d111111dd111111dd111111ddddbbbbccccccccccccccccccbbbbdddd111111dd111111dd111111ddddbbbbccccccccccccccccccccccccccccccccccbbbbdddd111111dd111111dd111111dd111111d
            dd1111dddd1111dddd1111ddddeeeebbbd111dbbbd111dbbbdeeeedddd1111dddd1111dddd1111ddddeeeebbbd111dbbbd111dbbbd111dbbbd111dbbbdeeeedddd1111dddd1111dddd1111dddd1111dd
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee111111111111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eddeeddeeddeeddeeddeeddeedddddd111111111111111111ddddddeeddeeddeeddeeddeeddeeddeedddddd1111111111111111111111111111111111ddddddeeddeeddeeddeeddeeddeeddeeddeedde
            dddeeddddddeeddddddeeddddddd111111111111111dd1111111dddddddeeddddddeeddddddeeddddddd11111111111111111111111dd111111111111111dddddddeeddddddeeddddddeeddddddeeddd
            1dddddd11dddddd11dddddd1111111111111111111dddd11111111111dddddd11dddddd11dddddd111111111111111111111111111dddd1111111111111111111dddddd11dddddd11dddddd11dddddd1
            111111111111111111111111111111111111111111dddd111111111111111111111111111111111111111111111111111111111111dddd11111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111dbbbbd1111111111111111111111111111111111111111111111111111111111dbbbbd1111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111dddddd1111111111111111111111111111111111111111111111111111111111dddddd1111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111dddddddd11111111111111111111111111111111111111111111111111111111dddddddd111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111ee11114411441111111111111111111111111111111111111111111111111111ee111111111111111111111111111111111111111111114411441
            1111111111ddd1111111111111111111111111111ddeedd11ee44ee11111111111ddd11111111111111111111111111111ddd1111ddeedd111111111111111111111111111111111111111111ee44ee1
            111111111d111dd1111111111111111111111111dddeeddd1eeeeee1111111111d111dd111111111111dd111111111111d111dd1dddeeddd1111111111111111111dd11111111111111111111eeeeee1
            11111111111111111111111111111111111111111dddddd11ee11ee111111111111111111111111111dddd1111111111111111111dddddd1111111111111111111dddd1111111111111111111ee11ee1
            1111111111111111111111111111111111111111111111111eeddee111111111111111111111111111dddd11111111111111111111111111111111111111111111dddd1111111111111111111eeddee1
            1111111111111111111111111111111111111111111111111dddddd11111111111111111111111111dbbbbd111111111111111111111111111111111111111111dbbbbd111111111111111111dddddd1
            1111111111111111111111111111111111111111111111111dd11dd11111111111111111111111111dddddd111111111111111111111111111111111111111111dddddd111111111111111111dd11dd1
            11111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddd1111111111111111111111111111111111111111dddddddd111111111111111111111111
            11111111111111111111111111111111111111111111111111111111111111111111111111111111111ee1111111111114411441144114411111111111111111111ee111111111111111111111111111
            1111111111111111111111111111111111ddd1111111111111111111111111111111111111ddd1111ddeedd1111111111ee44ee44ee44ee111111111111111111ddeedd111ddd1111111111111111111
            111dd1111111111111111111111111111d111dd1111111111111111111111111111111111d111dd1dddeeddd111111111eeeeeeeeeeeeee11111111111111111dddeeddd1d111dd11111111111111111
            11dddd111111111111111111111111111111111111111111111111111111111111111111111111111dddddd1111111111ee11ee11ee11ee111111111111111111dddddd1111111111111111111111111
            11dddd1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111eeddeeddeeddee1111111111111111111111111111111111111111111111111
            1dbbbbd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddddddddd1111111111111111111111111111111111111111111111111
            1dddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dd11dd11dd11dd1111111111111111111111111111111111111111111111111
            dddddddd11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            111ee11111111111111111111441144111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1ddeedd111111111111111111ee44ee1111111111111111111ddd1111111111111111111111111111111111111111111111111111111111111ddd1111111111111111111111111111111111111ddd111
            dddeeddd11111111111111111eeeeee111111111111111111d111dd1111111111111111111111111111111111111111111111111111111111d111dd1111111111111111111111111111111111d111dd1
            1dddddd111111111111111111ee11ee111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111eeddee111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1dddd1111dddd1111dddd1111dddddd11dddd1111dddd1111dddd1111dddd1111dddd1111dddd1111dddd1111dddd1111dddd1111dddd1111dddd1111dddd1111dddd1111dddd1111dddd1111dddd111
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddbbbbddddbbbbddddbbbbddddbbbbddddbbbbddddbbbbddddbbbbddddbbbbddddbbbbddddbbbbddddbbbbddddbbbbddddbbbbddddbbbbddddbbbbddddbbbbddddbbbbddddbbbbddddbbbbddddbbbbd
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            `)
        tiles.setTilemap(tilemap`level_2`)
    } else {
        game.reset()
    }
}
info.onLifeZero(function () {
    game.over(false, effects.slash)
})
function createEnemiesWalkingLeft () {
    shyWalkLeft = animation.createAnimation(ActionKind.WalkingLeft, 100)
    shyWalkLeft.addAnimationFrame(img`
        . . . . f f f f f f f f . . . . 
        . . . f f f f 2 2 2 2 2 f f . . 
        . . f 1 1 1 1 f f 2 2 2 2 2 f . 
        . f 1 1 1 1 1 1 f 2 2 2 2 2 2 f 
        . f 1 1 1 1 1 1 f f 2 2 2 2 f . 
        f 1 f f 1 f f 1 1 f f f f f . . 
        f 1 f f 1 f f 1 1 f f f f f f . 
        f 1 1 1 1 1 1 1 1 f 2 2 2 2 f . 
        f 1 1 1 1 1 1 1 f f 2 2 2 2 f . 
        f f 1 1 f 1 1 1 f 2 2 2 2 f . . 
        . f 1 1 f 1 1 f f f 2 2 2 f f . 
        f 2 f 1 1 1 f f f 2 2 2 2 2 f . 
        f 2 2 f f f f f 2 2 f f 2 2 2 f 
        f f f 2 2 2 2 f f f 2 2 2 f f f 
        . f 2 2 2 f f 1 f f f f f f . . 
        . . f f f f 1 1 1 1 f f . . . . 
        `)
    shyWalkLeft.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f f f f 2 2 2 2 2 f f . . 
        . . f 1 1 1 1 f f 2 2 2 2 2 f . 
        . f 1 1 1 1 1 1 f 2 2 2 2 2 2 f 
        . f 1 1 1 1 1 1 f f 2 2 2 2 f . 
        f 1 f f 1 f f 1 1 f f f f f . . 
        f 1 f f 1 f f 1 1 f f f f f f . 
        f 1 1 1 1 1 1 1 1 f 2 2 2 2 f . 
        f 1 1 1 1 1 1 1 f f 2 2 2 2 f . 
        f f 1 1 f 1 1 1 f 2 2 2 2 f . . 
        . f 1 1 f 1 1 f f f 2 2 2 f f . 
        f 2 f 1 1 1 f f f 2 2 2 2 2 f . 
        f 2 f f f f f 2 f 2 2 2 f f 2 f 
        f f 1 f f 2 2 2 f f f f 1 1 f f 
        f 1 1 1 1 f f f f f f 1 1 f f . 
        `)
    shyWalkLeftUp = animation.createAnimation(ActionKind.WalkingLeftUp, 100)
    shyWalkLeftUp.addAnimationFrame(img`
        . . f f f f 1 1 1 1 f f . . . . 
        . f 2 2 2 f f 1 f f f f f f . . 
        f f f 2 2 2 2 f f f 2 2 2 f f f 
        f 2 2 f f f f f 2 2 f f 2 2 2 f 
        f 2 f 1 1 1 f f f 2 2 2 2 2 f . 
        . f 1 1 f 1 1 f f f 2 2 2 f f . 
        f f 1 1 f 1 1 1 f 2 2 2 2 f . . 
        f 1 1 1 1 1 1 1 f f 2 2 2 2 f . 
        f 1 1 1 1 1 1 1 1 f 2 2 2 2 f . 
        f 1 f f 1 f f 1 1 f f f f f f . 
        f 1 f f 1 f f 1 1 f f f f f . . 
        . f 1 1 1 1 1 1 f f 2 2 2 2 f . 
        . f 1 1 1 1 1 1 f 2 2 2 2 2 2 f 
        . . f 1 1 1 1 f f 2 2 2 2 2 f . 
        . . . f f f f 2 2 2 2 2 f f . . 
        . . . . f f f f f f f f . . . . 
        `)
    shyWalkLeftUp.addAnimationFrame(img`
        f 1 1 1 1 f f f f f f 1 1 f f . 
        f f 1 f f 2 2 2 f f f f 1 1 f f 
        f 2 f f f f f 2 f 2 2 2 f f 2 f 
        f 2 f 1 1 1 f f f 2 2 2 2 2 f . 
        . f 1 1 f 1 1 f f f 2 2 2 f f . 
        f f 1 1 f 1 1 1 f 2 2 2 2 f . . 
        f 1 1 1 1 1 1 1 f f 2 2 2 2 f . 
        f 1 1 1 1 1 1 1 1 f 2 2 2 2 f . 
        f 1 f f 1 f f 1 1 f f f f f f . 
        f 1 f f 1 f f 1 1 f f f f f . . 
        . f 1 1 1 1 1 1 f f 2 2 2 2 f . 
        . f 1 1 1 1 1 1 f 2 2 2 2 2 2 f 
        . . f 1 1 1 1 f f 2 2 2 2 2 f . 
        . . . f f f f 2 2 2 2 2 f f . . 
        . . . . f f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        `)
}
function setEnemies () {
    for (let value8 of tiles.getTilesByType(tiles.util.object4)) {
        shyGuy = sprites.create(img`
            . . . . f f f f f f f f . . . . 
            . . f f 2 2 2 2 2 f f f f . . . 
            . f 2 2 2 2 2 f f 1 1 1 1 f . . 
            f 2 2 2 2 2 2 f 1 1 1 1 1 1 f . 
            . f 2 2 2 2 f f 1 1 1 1 1 1 f . 
            . . f f f f f 1 1 f f 1 f f 1 f 
            . f f f f f f 1 1 f f 1 f f 1 f 
            . f 2 2 2 2 f 1 1 1 1 1 1 1 1 f 
            . f 2 2 2 2 f f 1 1 1 1 1 1 1 f 
            . . f 2 2 2 2 f 1 1 1 f 1 1 f f 
            . f f 2 2 2 f f f 1 1 f 1 1 f . 
            . f 2 2 2 2 2 f f f 1 1 1 f 2 f 
            f 2 2 2 f f 2 2 f f f f f 2 2 f 
            f f f 2 2 2 f f f 2 2 2 2 f f f 
            . . f f f f f f 1 f f 2 2 2 f . 
            . . . . f f 1 1 1 1 f f f f . . 
            `, SpriteKind.ShyGuy)
        tiles.placeOnTile(shyGuy, value8)
        tiles.setTileAt(value8, myTiles.transparency16)
        shyGuy.setVelocity(50, 0)
        shyGuy.ay = gravity
        animation.attachAnimation(shyGuy, shyWalkRight)
        animation.attachAnimation(shyGuy, shyWalkLeft)
        animation.attachAnimation(shyGuy, shyWalkRightUp)
        animation.attachAnimation(shyGuy, shyWalkLeftUp)
    }
    for (let value9 of tiles.getTilesByType(tiles.util.object12)) {
        albatoss = sprites.create(img`
            ...........................fff.
            .......ffff.............ffffff.
            ......f22f...........fffffff...
            .....f2222f........ff2fffffff..
            ....f2222f........f22fffffff...
            ....f22ff2f......f2ffffff......
            ....fff2f22f....f2ffffffff.....
            ...f2222f222f..f2fffffff.......
            ..f222ff2f222ff2ffffff.........
            ..f22f1f22ff222fffff...........
            ...ff11f222222ffff2............
            ..fff2222fff2ffffff222.........
            .fffff2ff..fffffffffff2........
            fffffff.....fffffff.ff.........
            fff...........f.ff.............
            .ff...........fffff............
            `, SpriteKind.Albatoss)
        tiles.placeOnTile(albatoss, value9)
        tiles.setTileAt(value9, myTiles.transparency16)
        albatoss.setVelocity(-90, 0)
        albatoss.ay = 0
        albatoss.setFlag(SpriteFlag.BounceOnWall, true)
        animation.attachAnimation(albatoss, flyRight)
        animation.attachAnimation(albatoss, flyLeft)
    }
    for (let value10 of tiles.getTilesByType(tiles.util.object6)) {
        ninji = sprites.create(img`
            . . . . f . . . . . f . . . . . 
            . . . . f f . . . . f f . . . . 
            . . . f f f f f f f f f . . . . 
            . . f f f f f f f f f f f . . . 
            . . f f f f f f f f f f f . . . 
            . f f f f 1 1 1 1 1 1 f f . . . 
            . f f f 1 1 f 1 1 f 1 1 f f . . 
            f f f f 1 1 f 1 1 f 1 1 f f . . 
            f f f f 1 1 1 1 1 1 1 f f f f . 
            f f f f f f f f f f f f f f f . 
            f f f . f f f f f f f f . f f . 
            f f . f f f 2 f f 2 f f f . . . 
            f f f f f f f f f f f f f f . . 
            f f f f f f f f f f f f f f . . 
            . f f f f f . . . f f f f . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Ninji)
        tiles.placeOnTile(ninji, value10)
        tiles.setTileAt(value10, myTiles.transparency16)
        ninji.setVelocity(0, 50)
        ninji.ay = gravity
        animation.attachAnimation(ninji, ninjiJump)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Ninji, function (sprite, otherSprite) {
    overlapEnemy(sprite, otherSprite)
})
function clearLevel () {
    for (let value11 of sprites.allOfKind(SpriteKind.Albatoss)) {
        value11.destroy()
    }
    for (let value12 of sprites.allOfKind(SpriteKind.ShyGuy)) {
        value12.destroy()
    }
    for (let value13 of sprites.allOfKind(SpriteKind.Ninji)) {
        value13.destroy()
    }
    for (let value14 of sprites.allOfKind(SpriteKind.Gem)) {
        value14.destroy()
    }
    for (let value15 of sprites.allOfKind(SpriteKind.Star)) {
        value15.destroy()
    }
    for (let value19 of sprites.allOfKind(SpriteKind.GoldMushroom)) {
        value19.destroy()
    }
    for (let value202 of sprites.allOfKind(SpriteKind.StatusGem)) {
        value202.destroy()
    }
    player.destroy()
    isClimbing = false
    inFrontofLadder = false
    atTopOfLadder = false
    if (isFlippedUp) {
        isFlippedUp = false
        walkingLeft1.flipY()
        walkingLeft2.flipY()
        walkingRight1.flipY()
        walkingRight2.flipY()
    }
    if (isShadeSet) {
        isShadeSet = false
        shade.destroy()
    }
    if (isLanternOn) {
        isLanternOn = false
        lantern.stopLanternEffect()
    }
    setLevelMap()
    setPlayer()
    setEnemies()
    setGoals()
    setAction()
    setStatusGems()
}
function createEnemiesJumping () {
    ninjiJump = animation.createAnimation(ActionKind.Jumping, 500)
    ninjiJump.addAnimationFrame(img`
        . . . . f . . . . . f . . . . . 
        . . . . f f . . . . f f . . . . 
        . . . f f f f f f f f f . . . . 
        . . f f f f f f f f f f f . . . 
        . . f f f f f f f f f f f . . . 
        . f f f f 1 1 1 1 1 1 f f . . . 
        . f f f 1 1 f 1 1 f 1 1 f f . . 
        f f f f 1 1 f 1 1 f 1 1 f f . . 
        f f f f 1 1 1 1 1 1 1 f f f f . 
        f f f f f f f f f f f f f f f . 
        f f f . f f f f f f f f . f f . 
        f f . f f f 2 f f 2 f f f . . . 
        f f f f f f f f f f f f f f . . 
        f f f f f f f f f f f f f f . . 
        . f f f f f . . . f f f f . . . 
        . . . . . . . . . . . . . . . . 
        `)
    ninjiJump.addAnimationFrame(img`
        . . . f . . . . . . f . . . . . 
        . . . f f f . . . . f f . . . . 
        . . . f f f f f f f f f . . . . 
        . . . f f f f f f f f f f . . . 
        f f . f f f f f f f f f f . . . 
        f f f f f f 1 1 1 1 1 f f . f f 
        . f f f f 1 1 f 1 1 f 1 f f f f 
        . f f f f 1 1 f 1 1 f 1 f f f . 
        . . f f f 1 1 1 1 1 1 1 f f f . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f 2 f f 2 f f f . . 
        . f f f f f f f f f f f f f . . 
        . f f f f f f f f f f f f f . . 
        . f f f f f . . . . f f f f . . 
        . f f . . . . . . . . f f . . . 
        `)
    ninjiJump.addAnimationFrame(img`
        . . . . . f . . . . . f . . . . 
        . . . . f f . . . . f f . . . . 
        . . . . f f f f f f f f f . . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . f f 1 1 1 1 1 1 f f f f . 
        . . f f 1 1 f 1 1 f 1 1 f f f . 
        . . f f 1 1 f 1 1 f 1 1 f f f f 
        . f f f f 1 1 1 1 1 1 1 f f f f 
        . f f f f f f f f f f f f f f f 
        . f f . f f f f f f f f . f f f 
        . . . f f f 2 f f 2 f f f . f f 
        . . f f f f f f f f f f f f f f 
        . . f f f f f f f f f f f f f f 
        . . . f f f f . . . f f f f f . 
        . . . . . . . . . . . . . . . . 
        `)
    ninjiJump.addAnimationFrame(img`
        . . . . . f . . . . . . f . . . 
        . . . . f f . . . . f f f . . . 
        . . . . f f f f f f f f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . f f f f f f f f f f . f f 
        f f . f f 1 1 1 1 1 f f f f f f 
        f f f f 1 f 1 1 f 1 1 f f f f . 
        . f f f 1 f 1 1 f 1 1 f f f f . 
        . f f f 1 1 1 1 1 1 1 f f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f 2 f f 2 f f f f f . . 
        . . f f f f f f f f f f f f f . 
        . . f f f f f f f f f f f f f . 
        . . f f f f . . . . f f f f f . 
        . . . f f . . . . . . . . f f . 
        `)
}
function overlapEnemy (sprite: Sprite, otherSprite: Sprite) {
    if (sprite.vy > 0 && !(sprite.isHittingTile(CollisionDirection.Bottom)) && (sprite.y < otherSprite.top && !(isFlippedUp))) {
        otherSprite.destroy(effects.ashes, 250)
        otherSprite.vy = -50
        sprite.vy = -4 * pixelsToMeters
        music.powerUp.play()
    } else if (sprite.vy < 0 && !(sprite.isHittingTile(CollisionDirection.Bottom)) && (sprite.y > otherSprite.top && isFlippedUp)) {
        otherSprite.destroy(effects.ashes, 250)
        otherSprite.vy = 50
        sprite.vy = 4 * pixelsToMeters
        music.powerUp.play()
    } else {
        info.changeLifeBy(-1)
        sprite.destroy(effects.disintegrate, 250)
        if (isFlippedUp) {
            sprite.vy = 50
        } else {
            sprite.vy = -50
        }
        music.powerDown.play()
        color.FadeToBlack.startScreenEffect(1000)
        color.pauseUntilFadeDone()
        clearLevel()
        color.clearFadeEffect()
    }
}
function setGravity () {
    pixelsToMeters = 30
    gravity = 9.81 * pixelsToMeters
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile20, function (sprite, location) {
    if (!(playerFacingRight)) {
        sprite.vx += -1
        sprite.y += -1.5
    } else {
        sprite.vx += 1
        sprite.y += -1.5
    }
    if (scene.tileHitFrom(player, CollisionDirection.Bottom) == 1) {
        sprite.vx = 0
        sprite.vy = 0
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Star, function (sprite, otherSprite) {
    otherSprite.destroy()
    music.magicWand.play()
    color.FadeToBlack.startScreenEffect(200)
    color.pauseUntilFadeDone()
    currentLevel += 1
    clearLevel()
    color.clearFadeEffect()
})
function setShade () {
    if (currentLevel == 2) {
        shade = shader.createRectangularShaderSprite(159, 48, shader.ShadeLevel.One)
        shade.setPosition(784, 439)
    } else if (currentLevel == 1) {
        shade = shader.createRectangularShaderSprite(32, 61, shader.ShadeLevel.One)
        shade.setPosition(388, 415)
    }
    isShadeSet = true
}
scene.onOverlapTile(SpriteKind.ShyGuy, tiles.util.arrow15, function (sprite, location) {
    sprite.ay = gravity
    if (sprite.vx > 0) {
        animation.setAction(sprite, ActionKind.WalkingRight)
    } else {
        animation.setAction(sprite, ActionKind.WalkingLeft)
    }
})
let isLanternOn = false
let shade: Sprite = null
let isShadeSet = false
let ninjiJump: animation.Animation = null
let ninji: Sprite = null
let albatoss: Sprite = null
let shyGuy: Sprite = null
let shyWalkLeftUp: animation.Animation = null
let shyWalkLeft: animation.Animation = null
let mushroom: Sprite = null
let star: Sprite = null
let gem: Sprite = null
let shyWalkRightUp: animation.Animation = null
let shyWalkRight: animation.Animation = null
let climbing2: Image = null
let flyLeft: animation.Animation = null
let walkingRight1: Image = null
let walkingLeft1: Image = null
let walkingLeft2: Image = null
let walkingRight2: Image = null
let climbing1: Image = null
let walkRight: animation.Animation = null
let walkLeft: animation.Animation = null
let climb: animation.Animation = null
let isFlippedUp = false
let atTopOfLadder = false
let inFrontofLadder = false
let isClimbing = false
let pixelToad: Image = null
let statusGem2: Sprite = null
let statusGem1: Sprite = null
let statusGem: Sprite = null
let ctrGem = 0
let gravity = 0
let player: Sprite = null
let playerFacingRight = false
let flyRight: animation.Animation = null
let pixelsToMeters = 0
let currentLevel = 0
let locOfTopOfLadder: tiles.Location = null
let bigStatusGem: Image = null
let smallStatusGem: Image = null
let smallGem: Image = null
let bigGem: Image = null
info.setLife(3)
currentLevel = 1
setLevelMap()
createAnimations()
setGravity()
setPlayer()
setEnemies()
setGoals()
setAction()
setStatusGems()
game.onUpdate(function () {
    if (player.vx < 0) {
        playerFacingRight = false
        if (!(isClimbing)) {
            animation.setAction(player, ActionKind.WalkingLeft)
        }
    } else if (player.vx > 0) {
        playerFacingRight = true
        if (!(isClimbing)) {
            animation.setAction(player, ActionKind.WalkingRight)
        }
    }
    if (player.vy != 0) {
        if (inFrontofLadder && isClimbing) {
            animation.setAction(player, ActionKind.Climbing)
        }
    }
    if (player.vx == 0 && player.vy == 0) {
        standIdle()
    }
    if (isClimbing && player.vx == 0 && player.vy == 0 && !(player.isHittingTile(CollisionDirection.Bottom))) {
        climbIdle()
    }
})
game.onUpdate(function () {
    for (let value16 of sprites.allOfKind(SpriteKind.ShyGuy)) {
        if (value16.isHittingTile(CollisionDirection.Right)) {
            value16.vx = -50
            if (value16.ay > 0) {
                animation.setAction(value16, ActionKind.WalkingLeft)
            } else {
                animation.setAction(value16, ActionKind.WalkingLeftUp)
            }
        }
        if (value16.isHittingTile(CollisionDirection.Left)) {
            value16.vx = 50
            if (value16.ay > 0) {
                animation.setAction(value16, ActionKind.WalkingRight)
            } else {
                animation.setAction(value16, ActionKind.WalkingRightUp)
            }
        }
    }
    for (let value17 of sprites.allOfKind(SpriteKind.Albatoss)) {
        if (value17.isHittingTile(CollisionDirection.Right)) {
            value17.vx = -90
            animation.setAction(value17, ActionKind.FlyingLeft)
        }
        if (value17.isHittingTile(CollisionDirection.Left)) {
            value17.vx = 90
            animation.setAction(value17, ActionKind.FlyingRight)
        }
    }
    for (let value18 of sprites.allOfKind(SpriteKind.Ninji)) {
        if (value18.isHittingTile(CollisionDirection.Bottom)) {
            animation.setAction(value18, ActionKind.Jumping)
            value18.vy = -5 * pixelsToMeters
        }
    }
})
game.onUpdate(function () {
    if (currentLevel == 2) {
        if (player.x >= 856 && player.x <= 872 && !(isShadeSet) && player.y > 300) {
            setShade()
        }
        if ((player.x > 872 || player.x < 856) && isShadeSet && player.y < 300) {
            isShadeSet = false
            shade.destroy()
        }
        if (!(isLanternOn) && isShadeSet && player.x <= 785) {
            isLanternOn = true
            shade.destroy()
            lantern.startLanternEffect(player)
            lantern.setBreathingEnabled(false)
            lantern.setLightBandWidth(15)
        }
        if (isLanternOn && player.x > 785) {
            isLanternOn = false
            lantern.stopLanternEffect()
            setShade()
        }
    } else if (currentLevel == 1) {
        if (player.x >= 288 && player.x <= 392 && !(isShadeSet) && !(isLanternOn)) {
            setShade()
        }
        if (player.x < 288 && isShadeSet) {
            isShadeSet = false
            shade.destroy()
        }
        if (!(isLanternOn) && isShadeSet && player.y < 240) {
            isLanternOn = true
            isShadeSet = false
            shade.destroy()
            lantern.startLanternEffect(player)
            lantern.setBreathingEnabled(false)
            lantern.setLightBandWidth(15)
        }
        if (isLanternOn && player.y >= 240) {
            isLanternOn = false
            lantern.stopLanternEffect()
        }
    }
})
game.onUpdate(function () {
    if (player.tileKindAt(TileDirection.Center, myTiles.tile26) || player.tileKindAt(TileDirection.Center, myTiles.tile27) || player.tileKindAt(TileDirection.Center, myTiles.tile28)) {
        inFrontofLadder = true
        if (player.isHittingTile(CollisionDirection.Bottom)) {
            if (isClimbing) {
                isClimbing = false
                player.ay = gravity
                controller.moveSprite(player, 100, 0)
                atTopOfLadder = false
            } else {
                if (controller.up.isPressed()) {
                    isClimbing = true
                    player.ay = 0
                    controller.moveSprite(player, 0, 50)
                }
            }
        } else {
            if (isClimbing && (player.tileKindAt(TileDirection.Left, myTiles.tile26) || player.tileKindAt(TileDirection.Right, myTiles.tile26))) {
                isClimbing = false
                player.ay = gravity
                controller.moveSprite(player, 100, 0)
                atTopOfLadder = false
            }
            if (isClimbing && player.tileKindAt(TileDirection.Center, myTiles.tile26)) {
                player.ay = 0
                atTopOfLadder = true
                locOfTopOfLadder = tiles.locationOfSprite(player)
                if (player.y < locOfTopOfLadder.y) {
                    controller.moveSprite(player, 100, 50)
                    player.setPosition(player.x, locOfTopOfLadder.y - 1)
                }
            } else {
                if (player.tileKindAt(TileDirection.Center, myTiles.tile28)) {
                    isClimbing = true
                    player.ay = 0
                    player.vy = 0
                    controller.moveSprite(player, 0, 50)
                }
            }
        }
    } else {
        if (isClimbing) {
            isClimbing = false
            player.ay = gravity
            controller.moveSprite(player, 100, 0)
            atTopOfLadder = false
        }
    }
})
