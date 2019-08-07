/**
 * 碰撞检测
 * 被检测物体是否碰撞上基准体
 * @param bench 基准体 砖块
 * @param aims 被检测物体  球
 */
export const impactChecking = function (bench, aims) {
  let res = {
    state: true, // 是否碰撞
    direction: '', // 基准被碰撞的侧面 上 下 左 右
  }
  if (aims.right < bench.left || aims.left > bench.right || aims.bottom < bench.top || aims.top > bench.bottom) {
    res.state = false;
  } else {
    // aims碰撞bench - 下
    if (Math.abs(aims.top - bench.bottom) <= 3  && (aims.right > bench.left || aims.left < bench.right)) {
      res.direction = 'bottom'
    }
    // aims碰撞bench - 上
    else if (Math.abs(aims.bottom - bench.top) <= 3  && (aims.right > bench.left || aims.left < bench.right)) {
      res.direction = 'top'
    }
    // aims碰撞bench - 左
    else if (Math.abs(aims.right - bench.left) <= 3  && (aims.bottom > bench.top || aims.top < bench.bottom)) {
      res.direction = 'left'
    }
    // aims碰撞bench - 右
    else if (Math.abs(aims.left - bench.right) <= 3  && (aims.bottom > bench.top || aims.top < bench.bottom)) {
      res.direction = 'right'
    }
  }
  return res;
}
/**
 * 碰撞折返
 */
export const impactReturn = function (impactRes, p) {
  let res = p
  if (!impactRes.state) {
    return
  }
  if (impactRes.direction === 'bottom') {
    res.y = -res.y
  } else if (impactRes.direction === 'top') {
    res.y = -res.y
  } else if (impactRes.direction === 'left') {
    res.x = -res.x
  } else if (impactRes.direction === 'right') {
    res.x = -res.x
  } else if (impactRes.direction === 'other') {
    res.x = -res.x
    res.y = -res.y
  }
  return res
}

/**
 * 碰壁检测
 * @param bench 基准体
 * @param boundary 边界墙
 */
export const impactCheckWall = function (bench, boundary) {
  let res = {
    collides: false,
    collidesPosition: ''
  }
  // 右墙壁
  if (bench.right >= boundary.right) {
    res.collides = true
    res.collidesPosition = 'right'
  }
  // 上墙壁
  else if (bench.top <= boundary.top) {
    res.collides = true
    res.collidesPosition = 'top'
  }
  // 左墙壁
  else if (bench.left <= boundary.left) {
    res.collides = true
    res.collidesPosition = 'left'
  }
  // 下墙壁
  else if (bench.bottom >= boundary.bottom) {
    res.collides = true
    res.collidesPosition = 'bottom'
  }
  return res
}