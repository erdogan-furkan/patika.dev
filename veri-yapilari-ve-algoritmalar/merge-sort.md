# Proje 2 - Merge Sort

Projeye ilişkin adrese gitmek için [buraya](https://app.patika.dev/courses/veri-yapilari-ve-algoritmalar/merge-sort-proje) tıklayabilirsiniz.

[16,21,11,8,12,22]

## 1. Yukarıdaki dizinin sort türüne göre aşamalarını yazınız.

```
                                        [16] -->    [16] --> [16]

                        [16,21,11] -->                               --> [11,16,21]
                                                    [21]
                                        [21,11] -->      --> [11,21]
                                                    [11]
[16,21,11,8,12,22] -->                                                               --> [8,11,12,16,21,22]
                                         [8] -->     [8] --> [8]

                         [8,12,22] -->                               -->  [8,12,22]
                                                    [12]
                                        [12,22] -->      --> [12,22]
                                                    [22]
```

## 2. Big-O gösterimini yazınız.

```
O(nlogn)
```
