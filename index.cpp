#include <bits/stdc++.h>
using namespace std;

struct State {
    int x, y, dir, steps;
};

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int M, N;
    cin >> M >> N;

    vector<vector<char>> grid(M, vector<char>(N));
    for (int i = 0; i < M; i++) {
        for (int j = 0; j < N; j++) {
            cin >> grid[i][j];
        }
    }

    pair<int, int> s1, s2, S1, S2;
    bool foundStart = false, foundEnd = false;

    for (int i = 0; i < M; i++) {
        for (int j = 0; j < N; j++) {
            if (grid[i][j] == 's') {
                if (!foundStart) {
                    s1 = {i, j};
                    foundStart = true;
                } else s2 = {i, j};
            }
            if (grid[i][j] == 'S') {
                if (!foundEnd) {
                    S1 = {i, j};
                    foundEnd = true;
                } else S2 = {i, j};
            }
        }
    }

    int startDir = (s1.first == s2.first ? 0 : 1); // 0 = horizontal, 1 = vertical
    int targetDir = (S1.first == S2.first ? 0 : 1);

    auto norm = [](pair<int,int> a, pair<int,int> b, int dir){
        if (dir == 0) return (a.second < b.second ? a : b); // horizontal: leftmost
        else return (a.first < b.first ? a : b);            // vertical: topmost
    };
    pair<int,int> start = norm(s1, s2, startDir);
    pair<int,int> target = norm(S1, S2, targetDir);

    queue<State> q;
    vector<vector<vector<bool>>> vis(M, vector<vector<bool>>(N, vector<bool>(2,false)));

    q.push({start.first, start.second, startDir, 0});
    vis[start.first][start.second][startDir] = true;

    auto valid = [&](int x, int y) {
        return x >= 0 && x < M && y >= 0 && y < N && grid[x][y] != 'H';
    };

    while (!q.empty()) {
        auto cur = q.front(); q.pop();

        int x = cur.x, y = cur.y, d = cur.dir, steps = cur.steps;

        if (x == target.first && y == target.second && d == targetDir) {
            cout << steps << "\n";
            return 0;
        }

        if (d == 0) { // horizontal
            // left
            if (valid(x, y-1) && valid(x, y)) {
                if (!vis[x][y-1][0]) {
                    vis[x][y-1][0] = true;
                    q.push({x, y-1, 0, steps+1});
                }
            }
            // right
            if (valid(x, y+1) && valid(x, y+2)) {
                if (!vis[x][y+1][0]) {
                    vis[x][y+1][0] = true;
                    q.push({x, y+1, 0, steps+1});
                }
            }
            // up
            if (valid(x-1, y) && valid(x-1, y+1)) {
                if (!vis[x-1][y][0]) {
                    vis[x-1][y][0] = true;
                    q.push({x-1, y, 0, steps+1});
                }
            }
            // down
            if (valid(x+1, y) && valid(x+1, y+1)) {
                if (!vis[x+1][y][0]) {
                    vis[x+1][y][0] = true;
                    q.push({x+1, y, 0, steps+1});
                }
            }
            // rotation
            if (valid(x, y) && valid(x+1, y) && valid(x, y+1) && valid(x+1, y+1)) {
                if (!vis[x][y][1]) {
                    vis[x][y][1] = true;
                    q.push({x, y, 1, steps+1});
                }
                if (!vis[x][y+1][1]) {
                    vis[x][y+1][1] = true;
                    q.push({x, y+1, 1, steps+1});
                }
            }
        } else { // vertical
            // up
            if (valid(x-1, y) && valid(x, y)) {
                if (!vis[x-1][y][1]) {
                    vis[x-1][y][1] = true;
                    q.push({x-1, y, 1, steps+1});
                }
            }
            // down
            if (valid(x+1, y) && valid(x+2, y)) {
                if (!vis[x+1][y][1]) {
                    vis[x+1][y][1] = true;
                    q.push({x+1, y, 1, steps+1});
                }
            }
            // left
            if (valid(x, y-1) && valid(x+1, y-1)) {
                if (!vis[x][y-1][1]) {
                    vis[x][y-1][1] = true;
                    q.push({x, y-1, 1, steps+1});
                }
            }
            // right
            if (valid(x, y+1) && valid(x+1, y+1)) {
                if (!vis[x][y+1][1]) {
                    vis[x][y+1][1] = true;
                    q.push({x, y+1, 1, steps+1});
                }
            }
            // rotation
            if (valid(x, y) && valid(x+1, y) && valid(x, y+1) && valid(x+1, y+1)) {
                if (!vis[x][y][0]) {
                    vis[x][y][0] = true;
                    q.push({x, y, 0, steps+1});
                }
                if (!vis[x+1][y][0]) {
                    vis[x+1][y][0] = true;
                    q.push({x+1, y, 0, steps+1});
                }
            }
        }
    }

    cout << "Impossible\n";
    return 0;
}
