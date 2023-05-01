import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:widgets_app/config/config.dart';

// Listado de colores inmutable
final colorListProvider = Provider( (ref) => colors );

final isDarkModeProvider = StateProvider<bool>( (ref) => false );

final selectedColorProvider = StateProvider<int>((ref) => 0);

// Objeto de tipo AppTheme (custom)
final themeNotifierProvider = StateNotifierProvider<ThemeNotifier, AppTheme>(
  (ref) => ThemeNotifier(),
);

class ThemeNotifier extends StateNotifier<AppTheme> {
  
  ThemeNotifier(): super( AppTheme() );

  void toggleDarkMode(){
    state = state.copyWith( isDarkMode: !state.isDarkMode );
  }

  void changeColorIndex( int colorIndex ){
    state = state.copyWith( selectedColor: colorIndex );
  }

}