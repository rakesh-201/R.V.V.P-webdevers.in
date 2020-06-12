#include<bits/stdc++.h>

using namespace std;

class Node {
    public:
        int data;
        Node *left;
        Node *right;
        Node(int d) {
            data = d;
            left = NULL;
            right = NULL;
        }
};

class Solution {
    public:
  		Node* insert(Node* root, int data) {
            if(root == NULL) {
                return new Node(data);
            } else {
                Node* cur;
                if(data <= root->data) {
                    cur = insert(root->left, data);
                    root->left = cur;
                } else {
                    cur = insert(root->right, data);
                    root->right = cur;
                }

               return root;
           }
        }

/*
class Node {
    public:
        int data;
        Node *left;
        Node *right;
        Node(int d) {
            data = d;
            left = NULL;
            right = NULL;
        }
};

*/

    void left(Node* root){
        if (root == nullptr){
        }
        else{
            left(root->left);
            cout<<root->data<<" ";
        }
    }

    void right(Node* root){
        if(root == nullptr){
        }
        else{
            right(root->left);
            right(root->right);
            cout<<root->data<<" ";
            // cout<<root->data<<" ";
            // right(root->right);

        }
    }

    void topView(Node * root) {
        if(root == nullptr){

        }
        else{
            // left(root->left);
            // cout<<root->data<<" ";
            // right(root);
            // cout<<root->data<<" ";
            cout<<root->right->data<<" ";
            cout<<root->right->left->data<<" ";
            cout<<root->right->left->left->data<<" ";
            cout<<root->right->left->left->right->data<<" ";
        }
    }
 
}; //End of Solution

int main() {
    
    Solution myTree;
    Node* root = NULL;
    
    int t;
    int data;

    std::cin >> t;

    while(t-- > 0) {
        std::cin >> data;
        root = myTree.insert(root, data);
    }
  
    myTree.topView(root);

    return 0;
}
