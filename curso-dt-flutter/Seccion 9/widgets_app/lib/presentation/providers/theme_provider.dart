import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:widgets_app/config/config.dart';

// Listado de colores inmutable
final colorListProvider = Provider( (ref) => colors );

final isDarkModeProvider = StateProvider<bool>( (ref) => false );

final selectedColorProvider = StateProvider<int>((ref) => 0);
