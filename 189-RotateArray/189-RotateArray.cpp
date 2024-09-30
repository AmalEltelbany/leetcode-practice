class Solution {
public:
void Reverse(vector<int>& arr, int start, int end)
{
  while (start <= end)
  {
    int temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}
    void rotate(vector<int>& nums, int k) {
       
     int  n=nums.size();
      k = k % n;
        // Reverse first n-k elements
   Reverse(nums, 0, n - k - 1);
  // Reverse last k elements
  Reverse(nums, n - k, n - 1);
  // Reverse whole array
  Reverse(nums, 0, n - 1);
    }
};