/**
 * unifiedname.js
 *
 * 功能：把所有的占位符都替换成真实的名字，包括 title，导航栏头部，class="class-name" 等地方。
 *
 * Created by James Swineson on 14/9/9.
 */

var name = "XX 班级";
document.title += ' - ' + name;
jQuery("a.navbar-brand").text(name);
jQuery(".class-name").html(name);
jQuery(".class-name-before").html(name + jQuery(".class-name-before").html());
