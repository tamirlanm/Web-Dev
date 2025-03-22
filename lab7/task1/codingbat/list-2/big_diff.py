def big_diff(nums):
  min_v = nums[0]
  max_v = nums[0]
  for i in nums:
    if min_v > i:
      min_v = i
    if max_v < i:
      max_v = i
  return max_v - min_v

